import { createSlice } from "@reduxjs/toolkit";

interface IState {
  authModal: {
    isOpen: boolean;
  };
  searchModal: {
    isOpen: boolean;
  };
  consulModal: {
    isOpen: boolean;
  };
}

const initialState: IState = {
  authModal: {
    isOpen: false,
  },
  searchModal: {
    isOpen: false,
  },
  consulModal: {
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
    switchConsultModalView: (state) => {
      state.consulModal.isOpen = !state.consulModal.isOpen;
    },
  },
});

export const {
  switchAuthModalView,
  switchSearchModalView,
  switchConsultModalView,
} = modalSlice.actions;

export default modalSlice.reducer;
