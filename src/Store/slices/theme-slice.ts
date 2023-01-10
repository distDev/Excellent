import { createSlice } from '@reduxjs/toolkit';

interface ITheme {
  mode: 'dark' | 'light';
}

const initialState: ITheme = { mode: 'light' };

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    switchTheme: (state) => {
      state.mode = state.mode === 'light' ? 'dark' : 'light';
    },
  },
});

export const { switchTheme } = themeSlice.actions;

export default themeSlice.reducer;
