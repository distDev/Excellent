import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { IService } from '../../Types/serviceInterface';
import { IAddToCart } from '../actions';

const initialState: IService[] = [];

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<IAddToCart>) => {
      state.push({
        id: action.payload.id,
        price: action.payload.price,
        img: action.payload.img,
        name: action.payload.name,
      });
    },
    removeFromCart: (state, action: PayloadAction<string>) => {
      return state.filter((e) => e.id !== action.payload);
    },
    clearCart: (state) => {
      return state = [];
    },
  },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
