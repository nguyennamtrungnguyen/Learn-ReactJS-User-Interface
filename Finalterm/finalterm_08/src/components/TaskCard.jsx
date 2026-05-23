import React from "react";
import { useDispatch } from "react-redux";
import { deleteTask } from "../feature/taskSlick";
import { useNavigate, useParams } from "react-router-dom";

const TaskCard = ({ task }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  return (
    <div className="bg-blue-300 rounded-2xl p-2">
      <p>{task.title}</p>
      <p>{task.status}</p>
      <p>{task.dueDate}</p>

      <div className="w-full flex justify-evenly mt-20">
        <button
          onClick={() => navigate(`/task/${task.id}`)}
          className="w-1/3 bg-green-400 rounded-2xl cursor-pointer hover:bg-green-800"
        >
          Xem Chi Tiết
        </button>
        <button
          onClick={() => dispatch(deleteTask(task.id))}
          className="w-1/3 bg-red-400 rounded-2xl cursor-pointer hover:bg-red-800"
        >
          Xóa
        </button>
      </div>
    </div>
  );
};

export default TaskCard;
