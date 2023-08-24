import { createSlice } from "@reduxjs/toolkit";

export const CartReduce = createSlice({
  name: "cart",
  initialState: {
    cart: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const exitItem = state.cart.find((item) => item.id === action.payload.id);
      if (exitItem) {
        exitItem.quantity++;
      } else {
        state.cart.push({ ...action.payload, quantity: 1 });
      }
    },
    removeFromCart: (state, action) => {
      // lay item khac voiw id truyen vao
      state.cart.filter((item) => item.id != action.payload.id);
    },
    upItem: (state, action) => {
      const checkItem = state.cart.find(
        (item) => item.id === action.payload.id
      );
      checkItem.quantity++;
    },
    downItem: (state, action) => {
      const checkItem = state.cart.find(
        (item) => item.id === action.payload.id
      );
      if (checkItem.quantity >= 1) {
        checkItem.quantity--;
      } else {
        state.cart.filter((item) => item.id != checkItem.id);
      }
    },
    removeAllCart: (state) => {
      state.cart = [];
    },
  },
});

export const { addToCart, removeFromCart, upItem, downItem, removeAllCart } =
  CartReduce.actions;

export default CartReduce.reducer;
