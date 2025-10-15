import weatherReducer, { fetchWeather, clearError } from '../weatherSlice';
import { WeatherState } from '../../../types';
import * as services from '../../../services';

jest.mock('../../../services');

describe('weatherSlice', () => {
  const initialState: WeatherState = {
    data: {},
    loading: false,
    error: null,
  };

  describe('reducers', () => {
    it('should return the initial state', () => {
      expect(weatherReducer(undefined, { type: 'unknown' })).toEqual(
        initialState,
      );
    });

    it('should handle clearError', () => {
      const previousState: WeatherState = {
        ...initialState,
        error: 'Some error',
      };
      expect(weatherReducer(previousState, clearError())).toEqual({
        ...previousState,
        error: null,
      });
    });
  });

  describe('fetchWeather async thunk', () => {
    const mockWeatherData = {
      weather: [{ description: 'clear sky', icon: '01d' }],
      main: { temp: 293.15, humidity: 65 },
      wind: { speed: 5.2 },
    };

    beforeEach(() => {
      jest.clearAllMocks();
    });

    it('should handle fetchWeather.pending', () => {
      const action = { type: fetchWeather.pending.type };
      const state = weatherReducer(initialState, action);
      expect(state).toEqual({
        data: {},
        loading: true,
        error: null,
      });
    });

    it('should handle fetchWeather.fulfilled', () => {
      const cityName = 'London';
      const weather = {
        description: 'clear sky',
        temperature: '20.0',
        humidity: 65,
        windSpeed: 5.2,
        icon: '01d',
      };

      const action = {
        type: fetchWeather.fulfilled.type,
        payload: { cityName, weather },
      };

      const state = weatherReducer(initialState, action);
      expect(state).toEqual({
        data: { [cityName]: weather },
        loading: false,
        error: null,
      });
    });

    it('should handle fetchWeather.rejected', () => {
      const errorMessage = 'City not found';
      const action = {
        type: fetchWeather.rejected.type,
        payload: errorMessage,
      };

      const state = weatherReducer(initialState, action);
      expect(state).toEqual({
        data: {},
        loading: false,
        error: errorMessage,
      });
    });

    it('should fetch weather data successfully', async () => {
      const mockedFetch = services.fetchWeatherData as jest.MockedFunction<
        typeof services.fetchWeatherData
      >;
      mockedFetch.mockResolvedValue(mockWeatherData);

      const dispatch = jest.fn();
      const thunk = fetchWeather('London');

      await thunk(dispatch, () => ({}), undefined);

      const { calls } = dispatch.mock;
      expect(calls).toHaveLength(2);
      expect(calls[0][0].type).toBe(fetchWeather.pending.type);
      expect(calls[1][0].type).toBe(fetchWeather.fulfilled.type);
      expect(calls[1][0].payload.cityName).toBe('London');
      expect(calls[1][0].payload.weather.temperature).toBe('20.0');
    });

    it('should handle fetch weather error', async () => {
      const mockedFetch = services.fetchWeatherData as jest.MockedFunction<
        typeof services.fetchWeatherData
      >;
      mockedFetch.mockRejectedValue(new Error('Network error'));

      const dispatch = jest.fn();
      const thunk = fetchWeather('InvalidCity');

      await thunk(dispatch, () => ({}), undefined);

      const { calls } = dispatch.mock;
      expect(calls).toHaveLength(2);
      expect(calls[0][0].type).toBe(fetchWeather.pending.type);
      expect(calls[1][0].type).toBe(fetchWeather.rejected.type);
    });
  });
});
