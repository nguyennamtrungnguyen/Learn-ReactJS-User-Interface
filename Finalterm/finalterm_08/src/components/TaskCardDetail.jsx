import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { fetchTask } from "../feature/taskSlick";

const TaskCardDetail = () => {
  const { isLoading, tasks } = useSelector((state) => state.task);
  const { id } = useParams();
  const navigate = useNavigate();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTask());
  }, [dispatch]);

  const task = tasks.find((item) => String(item.id) === String(id));
  return (
    <div className="bg-blue-300 rounded-2xl p-2">
      <p>{task.title}</p>
      <p>{task.description}</p>
      <p>{task.status}</p>
      <p>{task.dueDate}</p>

      <div className="w-full flex justify-evenly mt-20">
        <button
          onClick={() => navigate(-1)}
          className="w-1/3 bg-gray-400 rounded-2xl cursor-pointer hover:bg-gray-800"
        >
          Quay lai
        </button>
      </div>
    </div>
  );
};

export default TaskCardDetail;
