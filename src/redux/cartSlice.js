import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",

  initialState: [],

  reducers: {
    addToCart: (state, action) => {
      let item = state.find((item) => item.id === action.payload.id);

      if (item) {
        item.quantity += 1;
      } else {
        state.push({ ...action.payload, quantity: 1 });
      }
    },

    removeFromCart: (state, action) => {
      return state.filter((item) => item.id !== action.payload);
    },

    changeQuantity: (state, action) => {
      const { id, change } = action.payload;
      const item = state.find((item) => item.id === id);

      if (item) {
        item.quantity += change;
      }
    },

    clearAll: () => [],
  },
});

export const { addToCart, removeFromCart, changeQuantity, clearAll } =
  cartSlice.actions;
export default cartSlice.reducer;
