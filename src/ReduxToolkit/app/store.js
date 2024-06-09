import { configureStore } from "@reduxjs/toolkit";
import CounterSlice from "../Feature/Counter/CounterSlice";

export const store = configureStore({
  reducer: {
    counter: CounterSlice,
  },
});
