import React from "react";
import { RiResetLeftFill } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { decrement, increment, reset } from "../features/counterSlice";
const CounterController = () => {
  const dispatch = useDispatch();
  return (
    <div className="">
      <div className="flex mx-10">
        <button
          onClick={() => dispatch(decrement(10))}
          className="w-[50%] bg-blue-100 cursor-pointer hover:bg-blue-400 mx-2 my-5 p-3 rounded-2xl text-2xl font-bold text-red-400"
        >
          - 10
        </button>
        <button
          onClick={() => dispatch(increment(10))}
          className="w-[50%] bg-blue-100 cursor-pointer hover:bg-blue-400 mx-2 my-5 p-3 rounded-2xl text-2xl font-bold text-green-400"
        >
          + 10
        </button>
      </div>
      <div className="flex mx-10">
        <button
          onClick={() => dispatch(decrement(1))}
          className="w-[50%] bg-blue-100 cursor-pointer hover:bg-blue-400 mx-2 my-5 p-3 rounded-2xl text-2xl font-bold text-red-400"
        >
          - 1
        </button>
        <button
          onClick={() => dispatch(increment(1))}
          className="w-[50%] bg-blue-100 cursor-pointer hover:bg-blue-400 mx-2 my-5 p-3 rounded-2xl text-2xl font-bold text-green-400"
        >
          + 1
        </button>
      </div>
      <div className="flex mx-12 mt-20  text-center justify-center space-x-2 text-2xl font-bold bg-gray-300 cursor-pointer hover:bg-blue-300 py-3  rounded-2xl">
        <RiResetLeftFill className="mt-1" />
        <button onClick={() => dispatch(reset())}>Reset</button>
      </div>
    </div>
  );
};

export default CounterController;
