import { configureStore } from "@reduxjs/toolkit";
import CartReduce from "./redux/CartReduce";

export default configureStore({
  reducer: {
    cart: CartReduce,
  },
});
