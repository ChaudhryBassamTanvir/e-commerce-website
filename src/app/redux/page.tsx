"use client";
import React, { useState } from "react";

const page = () => {
  const [counter, setcounter] = useState<number>(0);
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <button className="text-5xl" onClick={() => setcounter(counter - 1)}>
        -
      </button>
      <span className="text-5xl">{counter}</span>
      <button className="text-5xl" onClick={() => setcounter(counter + 1)}>
        +{" "}
      </button>
    </div>
  );
};

export default page;
