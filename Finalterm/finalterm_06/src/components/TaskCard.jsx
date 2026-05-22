import React from "react";
import { useDispatch } from "react-redux";
import { deleteTasks } from "../feature/taskSlice";

const TaskCard = ({ task }) => {
  const dispatch = useDispatch();
  return (
    <div className="bg-blue-300 border-2 border-gray-300 rounded-lg px-1 py-2">
      <h1>{task.title}</h1>
      <p>{task.description}</p>
      <p>{task.dueDate}</p>

      <div className="flex flex-row justify-between mt-10">
        <button className="w-1/3 rounded-lg bg-blue-500 hover:bg-blue-700 text-white text-center p-2 cursor-pointer">
          Xem chi tiết
        </button>
        <button
          onClick={() => dispatch(deleteTasks(task.id))}
          className="w-1/3 rounded-lg bg-red-500 hover:bg-red-700 text-white text-center p-2 cursor-pointer"
        >
          Xóa
        </button>
      </div>
    </div>
  );
};

export default TaskCard;
