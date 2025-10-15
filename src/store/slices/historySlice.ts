import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { HistoryState, HistoryEntry } from '../../types';
import { fetchWeather } from './weatherSlice';

const initialState: HistoryState = {
  data: {},
};

const historySlice = createSlice({
  name: 'history',
  initialState,
  reducers: {
    clearCityHistory: (state, action: PayloadAction<string>) => {
      delete state.data[action.payload];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchWeather.fulfilled, (state, action) => {
      const { cityName, weather } = action.payload;

      const entry: HistoryEntry = {
        id: Date.now().toString(),
        timestamp: Date.now(),
        weather,
      };

      if (!state.data[cityName]) {
        state.data[cityName] = [];
      }

      // Add to beginning, limit to 50 entries
      state.data[cityName] = [entry, ...state.data[cityName]].slice(0, 50);
    });
  },
});

export const { clearCityHistory } = historySlice.actions;
export default historySlice.reducer;
