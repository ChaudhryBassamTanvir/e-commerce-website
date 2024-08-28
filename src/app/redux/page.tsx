"use client";
import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "../lib/redux/hooks/hooks";
import { useDispatch } from "react-redux";
import { decrement, increment } from "../lib/redux/slices/counterSlice";

const page = () => {
  const store = useAppSelector((state) => state.counterSlice.value);

  const dispatch = useAppDispatch();

  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <button className="text-5xl" onClick={() => dispatch(decrement())}>
        -
      </button>
      <span className="text-5xl">
        {/* {counter} */}
        {store}
      </span>
      <button className="text-5xl" onClick={() => dispatch(increment())}>
        +{" "}
      </button>
    </div>
  );
};

export default page;
