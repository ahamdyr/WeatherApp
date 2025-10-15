import citiesReducer, { verifyCity, clearError } from '../citiesSlice';
import { CitiesState, City } from '../../../types';
import * as services from '../../../services';

jest.mock('../../../services');

describe('citiesSlice', () => {
  const initialState: CitiesState = {
    list: [],
    loading: false,
    error: null,
  };

  describe('reducers', () => {
    it('should return the initial state', () => {
      expect(citiesReducer(undefined, { type: 'unknown' })).toEqual(
        initialState,
      );
    });

    it('should handle clearError', () => {
      const previousState: CitiesState = {
        ...initialState,
        error: 'Some error',
      };
      expect(citiesReducer(previousState, clearError())).toEqual({
        ...previousState,
        error: null,
      });
    });
  });

  describe('verifyCity async thunk', () => {
    beforeEach(() => {
      jest.clearAllMocks();
    });

    it('should handle verifyCity.pending', () => {
      const action = { type: verifyCity.pending.type };
      const state = citiesReducer(initialState, action);
      expect(state).toEqual({
        list: [],
        loading: true,
        error: null,
      });
    });

    it('should handle verifyCity.fulfilled with new city', () => {
      const city: City = { cityName: 'London', countryCode: 'GB' };
      const action = {
        type: verifyCity.fulfilled.type,
        payload: city,
      };

      const state = citiesReducer(initialState, action);
      expect(state).toEqual({
        list: [city],
        loading: false,
        error: null,
      });
    });

    it('should not add duplicate city', () => {
      const city: City = { cityName: 'London', countryCode: 'GB' };
      const previousState: CitiesState = {
        list: [city],
        loading: false,
        error: null,
      };

      const action = {
        type: verifyCity.fulfilled.type,
        payload: city,
      };

      const state = citiesReducer(previousState, action);
      expect(state).toEqual({
        list: [city],
        loading: false,
        error: 'City already exists',
      });
    });

    it('should handle verifyCity.rejected', () => {
      const errorMessage = 'City not found';
      const action = {
        type: verifyCity.rejected.type,
        payload: errorMessage,
      };

      const state = citiesReducer(initialState, action);
      expect(state).toEqual({
        list: [],
        loading: false,
        error: errorMessage,
      });
    });

    it('should verify city successfully', async () => {
      const mockedCheck = services.checkCityExists as jest.MockedFunction<
        typeof services.checkCityExists
      >;
      mockedCheck.mockResolvedValue({
        cityName: 'London',
        countryCode: 'GB',
      });

      const dispatch = jest.fn();
      const thunk = verifyCity('London');

      await thunk(dispatch, () => ({}), undefined);

      const { calls } = dispatch.mock;
      expect(calls).toHaveLength(2);
      expect(calls[0][0].type).toBe(verifyCity.pending.type);
      expect(calls[1][0].type).toBe(verifyCity.fulfilled.type);
      expect(calls[1][0].payload).toEqual({
        cityName: 'London',
        countryCode: 'GB',
      });
    });

    it('should handle verify city error', async () => {
      const mockedCheck = services.checkCityExists as jest.MockedFunction<
        typeof services.checkCityExists
      >;
      mockedCheck.mockRejectedValue(new Error('City not found'));

      const dispatch = jest.fn();
      const thunk = verifyCity('InvalidCity');

      await thunk(dispatch, () => ({}), undefined);

      const { calls } = dispatch.mock;
      expect(calls).toHaveLength(2);
      expect(calls[0][0].type).toBe(verifyCity.pending.type);
      expect(calls[1][0].type).toBe(verifyCity.rejected.type);
    });
  });
});
