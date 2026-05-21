import React from "react";
import { useSelector } from "react-redux";
const CounterDisplay = () => {
  const { value } = useSelector((state) => state.counter);

  return (
    <div className="flex justify-center items-center bg-blue-600 py-3 mx-10 rounded-2xl mt-4 text-center h-[50px]">
      <span className="text-4xl text-white mb-2">{value}</span>
    </div>
  );
};

export default CounterDisplay;
