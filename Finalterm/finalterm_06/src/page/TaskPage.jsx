import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTasks } from "../feature/taskSlice";
import TaskCard from "../components/TaskCard";

const TaskPage = () => {
  const { tasks, isLoading } = useSelector((state) => state.task);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  console.log(tasks);

  if (isLoading) return <p>Loading...</p>;
  return (
    <div className="flex flex-col justify-center items-center px-4">
      <h2 className="text-blue-500 font-bold text-3xl my-3">Danh sách công việc</h2>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
        {!isLoading &&
          tasks &&
          tasks.map((x) => <TaskCard task={x} key={x.id} />)}
      </div>
    </div>
  );
};

export default TaskPage;
