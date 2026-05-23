import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTask } from "../feature/taskSlick";
import TaskCard from "../components/TaskCard";

const TaskPage = () => {
  const dispatch = useDispatch();
  const { isLoading, tasks } = useSelector((state) => state.task);

  const [status, setStatus] = useState("all");

  useEffect(() => {
    dispatch(fetchTask());
  }, [dispatch]);

  const safeTasks = Array.isArray(tasks) ? tasks : [];

  const filteredTask =
    status === "all"
      ? safeTasks
      : safeTasks.filter((task) => task.status === status);

  if (isLoading) return <p>Loading...</p>;

  return (
    <div className="w-full mx-10">
      <div className="font-bold text-2xl bg-gray-300 rounded-2xl p-2 w-[150px] my-10">
        <select value={status} onChange={(e) => setStatus(e.target.value)}>
          <option value="all">All</option>
          <option value="pending">Pending</option>
          <option value="done">Done</option>
        </select>
      </div>

      <div className="grid grid-cols-4 w-full gap-6">
        {filteredTask.map((x) => (
          <TaskCard key={x.id} task={x} />
        ))}
      </div>
    </div>
  );
};

export default TaskPage;
