import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UIState } from '../../types';

const initialState: UIState = {
  showAddCityModal: false,
  showHistoryModal: false,
  selectedCity: null,
};

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    openAddCityModal: (state) => {
      state.showAddCityModal = true;
    },
    closeAddCityModal: (state) => {
      state.showAddCityModal = false;
    },
    openHistoryModal: (state, action: PayloadAction<string>) => {
      state.showHistoryModal = true;
      state.selectedCity = action.payload;
    },
    closeHistoryModal: (state) => {
      state.showHistoryModal = false;
      state.selectedCity = null;
    },
  },
});

export const {
  openAddCityModal,
  closeAddCityModal,
  openHistoryModal,
  closeHistoryModal,
} = uiSlice.actions;

export default uiSlice.reducer;
