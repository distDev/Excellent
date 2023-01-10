import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface IState {
  id: string;
  phoneNumber: any;
  name: any;
}

const initialState: IState = {
  id: '',
  phoneNumber: '',
  name: '',
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loginUser: (state, action: PayloadAction<IState>) => {
      state.id = action.payload.id;
      state.name = action.payload.name;
      state.phoneNumber = action.payload.phoneNumber;
    },
    logoutUser: (state) => {
      state.id = '';
      state.name = '';
      state.phoneNumber = '';
    },
  },
});

export const { loginUser, logoutUser } = userSlice.actions;

export default userSlice.reducer;
