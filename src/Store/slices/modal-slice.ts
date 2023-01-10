import { createSlice } from "@reduxjs/toolkit";

interface IState {
  authModal: {
    isOpen: boolean;
  };
  searchModal: {
    isOpen: boolean,
  },
}

const initialState: IState = {
  authModal: {
    isOpen: false,
  },
  searchModal: {
    isOpen: false,
  },
};

export const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    switchAuthModalView: (state) => {
      state.authModal.isOpen = !state.authModal.isOpen;
    },
    switchSearchModalView: (state) => {
      state.searchModal.isOpen = !state.searchModal.isOpen;
    },
  },
});

export const { switchAuthModalView, switchSearchModalView } = modalSlice.actions;

export default modalSlice.reducer;
