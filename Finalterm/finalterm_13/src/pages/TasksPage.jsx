import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTasks } from "../features/taskSlice";
import TaskCard from "../components/TaskCard";
import { Outlet, useLocation, useNavigate } from "react-router-dom";

const TasksPage = () => {
  const { tasks, isLoading } = useSelector((state) => state.task);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  const handlePathing = () => {
    if (location.pathname === "/tasks") navigate("/tasks/add");
    else navigate("/tasks");
  };

  if (isLoading) return <p>Loading...</p>;

  return (
    <div className="px-4 my-8">
      <div className="flex flex-row justify-between items-center">
        <h2 className="text-blue-500 font-bold text-xl my-4">
          Danh sách công việc
        </h2>
        <button
          onClick={handlePathing}
          className="rounded-lg bg-orange-500 hover:bg-orange-600 text-white text-center py-2 px-4"
        >
          {location.pathname === "/tasks" ? "Thêm công việc" : "Tắt biểu mẫu"}
        </button>
      </div>

      <div>
        <Outlet />
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-3 gap-8">
        {!isLoading &&
          tasks &&
          tasks.map((x) => <TaskCard task={x} key={x.id} />)}
      </div>
    </div>
  );
};

export default TasksPage;
