import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTask, deleteTask, updateTask } from "../features/taskSlice";

const useTask = () => {
  const { tasks, isLoading, error } = useSelector((state) => state.task);
  const dispatch = useDispatch();

  const createTask = useCallback(
    (task) => {
      dispatch(addTask(task));
    },
    [dispatch]
  );

  const editTask = useCallback(
    ({ id, task }) => {
      dispatch(updateTask({ id, task }));
    },
    [dispatch]
  );

  const removeTask = useCallback(
    (id) => {
      dispatch(deleteTask(id));
    },
    [dispatch]
  );

  return { tasks, isLoading, error, createTask, editTask, removeTask };
};

export default useTask;
