import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const itemExists = state.items.find(item => item.id === action.payload.id);
      if (!itemExists) {
        state.items.push({ ...action.payload, quantity: 1 });
      }
    },
    increment: (state, action) => {
      const item = state.items.find(item => item.id === action.payload);
      if (item) item.quantity++;
    },
    decrement: (state, action) => {
      const item = state.items.find(item => item.id === action.payload);
      if (item && item.quantity > 1) item.quantity--;
    },
    removeItem: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
  },
});

export const { addToCart, increment, decrement, removeItem } = cartSlice.actions;
export default cartSlice.reducer;
