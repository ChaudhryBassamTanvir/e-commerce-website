"use client";
import { Provider } from "react-redux";
import { store } from "./store";
import { Children, ReactNode } from "react";

export const ReduxProvider = ({ children }: { children: ReactNode }) => {
  return <Provider store={store}>{children}</Provider>;
};
