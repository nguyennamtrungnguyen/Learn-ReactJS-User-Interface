import React from "react";
import { RiResetLeftFill } from "react-icons/ri";
const Counter = () => {
  return (
    <div className="w-full h-dvh flex justify-center items-center bg-blue-100">
      <div className="w-[500px] h-[500px] bg-white flex-col justify-center items-center rounded-2xl shadow-2xl">
        <h1 className="text-black-300 text-center font-bold text-4xl mt-3">
          Counter
        </h1>
        <div className="flex justify-center items-center bg-blue-600 py-3 mx-10 rounded-2xl mt-4 text-center h-[50px]">
          <span className="text-4xl text-white mb-3"></span>
        </div>
        <div className="flex mx-10">
          <button className="w-[50%] bg-blue-100 cursor-pointer hover:bg-blue-400 mx-2 my-5 p-3 rounded-2xl text-2xl font-bold text-red-400">
            - 10
          </button>
          <button className="w-[50%] bg-blue-100 cursor-pointer hover:bg-blue-400 mx-2 my-5 p-3 rounded-2xl text-2xl font-bold text-green-400">
            + 10
          </button>
        </div>
        <div className="flex mx-10">
          <button className="w-[50%] bg-blue-100 cursor-pointer hover:bg-blue-400 mx-2 my-5 p-3 rounded-2xl text-2xl font-bold text-red-400">
            - 1
          </button>
          <button className="w-[50%] bg-blue-100 cursor-pointer hover:bg-blue-400 mx-2 my-5 p-3 rounded-2xl text-2xl font-bold text-green-400">
            + 1
          </button>
        </div>
        <div className="flex mx-12 mt-20  text-center justify-center space-x-2 text-2xl font-bold bg-gray-300 cursor-pointer hover:bg-blue-300 py-3  rounded-2xl">
          <RiResetLeftFill className="mt-1" />
          <button>Reset</button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
