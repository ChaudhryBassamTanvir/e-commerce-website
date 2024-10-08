import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: { value: 0 },
  reducers: {
    increment: (state) => {
      state.value = ++state.value;
    },
    decrement: (state) => {
      state.value = --state.value;
    },
  },
});

export const { increment, decrement } = counterSlice.actions;

export const counterReducer = counterSlice.reducer;
