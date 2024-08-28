import { configureStore } from "@reduxjs/toolkit";
import { counterReducer, counterSlice } from "./slices/counterSlice";
// ...

export const store = configureStore({
  reducer: {
    counterSlice: counterReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
