import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { IUseFilters } from '../actions';

const initialState = {
  category: '',
  subcategory: '',
};

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    changeFilters: (state, action: PayloadAction<IUseFilters>) => {
      state.category = action.payload.category
      state.subcategory = action.payload.subcategory
    },
  },
});

export const { changeFilters } = filterSlice.actions;

export default filterSlice.reducer;
