import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { WeatherState, WeatherData } from '../../types';
import { fetchWeatherData } from '../../services';

export const fetchWeather = createAsyncThunk(
  'weather/fetchWeather',
  async (cityName: string, { rejectWithValue }) => {
    try {
      const data = await fetchWeatherData(cityName);

      const weather: WeatherData = {
        description: data.weather[0].description,
        temperature: (data.main.temp - 273.15).toFixed(1),
        humidity: data.main.humidity,
        windSpeed: data.wind.speed,
        icon: data.weather[0].icon,
      };

      return {
        cityName,
        weather,
      };
    } catch (error) {
      return rejectWithValue((error as Error).message);
    }
  },
);

const initialState: WeatherState = {
  data: {},
  loading: false,
  error: null,
};

const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {
    clearError: state => {
      state.error = null;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchWeather.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchWeather.fulfilled, (state, action) => {
        state.loading = false;
        state.data[action.payload.cityName] = action.payload.weather;
      })
      .addCase(fetchWeather.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const { clearError } = weatherSlice.actions;
export default weatherSlice.reducer;
