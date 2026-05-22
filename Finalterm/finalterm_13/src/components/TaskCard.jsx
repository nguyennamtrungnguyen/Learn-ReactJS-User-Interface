import React from "react";
import { useDispatch } from "react-redux";
import { deleteTask } from "../features/taskSlice";
import { useNavigate } from "react-router-dom";

const TaskCard = ({ task }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <div className="bg-blue-100 border-2 border-gray-300 rounded-lg px-1 py-2">
      <h1 className="text-blue-800 font-bold">{task.title}</h1>
      <p>{task.description}</p>
      <p>{task.dueDate}</p>
      <div className="flex flex-row justify-between items-center mt-4">
        <button
          onClick={() => navigate(`/tasks/${task.id}`)}
          className="w-1/3 rounded-lg bg-blue-500 hover:bg-blue-600 text-white text-center py-2"
        >
          Xem chi tiết
        </button>
        <button
          onClick={() => dispatch(deleteTask(task.id))}
          className="w-1/3 rounded-lg bg-red-500 hover:bg-red-600 text-white text-center py-2"
        >
          Xóa
        </button>
      </div>
    </div>
  );
};

export default TaskCard;
