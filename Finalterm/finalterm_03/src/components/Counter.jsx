import React from "react";
import CounterDisplay from "./CounterDisplay";
import CounterController from "./CounterController";
const Counter = () => {
  return (
    <div className="w-full h-dvh flex justify-center items-center bg-blue-100">
      <div className="w-[500px] h-[500px] bg-white flex-col justify-center items-center rounded-2xl shadow-2xl">
        <h1 className="text-black-300 text-center font-bold text-4xl mt-3">
          Counter
        </h1>
        <CounterDisplay />
        <CounterController />
      </div>
    </div>
  );
};

export default Counter;
