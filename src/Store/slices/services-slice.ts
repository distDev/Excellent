import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { IService } from '../../Types/serviceInterface';

interface IState {
  filteredData: IService[];
  data: IService[];
  isPending: boolean;
}

const initialState: IState = {
  data: [],
  filteredData: [],
  isPending: true,
};

export const servicesSlice = createSlice({
  name: 'services',
  initialState,
  reducers: {
    getServices: (state, action: PayloadAction<any>) => {
      state.data = action.payload;
      state.isPending = false;
    },
    filteringServices: (state, action: PayloadAction<any>) => {
      state.filteredData = action.payload;
    },
  },
});

export const { getServices, filteringServices } = servicesSlice.actions;

export default servicesSlice.reducer;
