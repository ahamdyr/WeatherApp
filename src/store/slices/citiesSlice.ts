import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { CitiesState, City } from '../../types';
import { checkCityExists } from '../../services';

export const verifyCity = createAsyncThunk(
  'cities/verifyCity',
  async (cityName: string, { rejectWithValue }) => {
    try {
      const result = await checkCityExists(cityName);

      const cityEntry: City = {
        cityName: result.cityName,
        countryCode: result.countryCode,
      };
      return cityEntry;
    } catch (error) {
      return rejectWithValue((error as Error).message);
    }
  },
);

const initialState: CitiesState = {
  list: [],
  loading: false,
  error: null,
};

const citiesSlice = createSlice({
  name: 'cities',
  initialState,
  reducers: {
    clearError: state => {
      state.error = null;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(verifyCity.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(verifyCity.fulfilled, (state, action) => {
        state.loading = false;
        const cityEntry = action.payload;
        if (!state.list.some(city => city.cityName === cityEntry.cityName)) {
          state.list.push(cityEntry);
          state.error = null;
        } else {
          state.error = 'City already exists';
        }
      })
      .addCase(verifyCity.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const { clearError } = citiesSlice.actions;
export default citiesSlice.reducer;
