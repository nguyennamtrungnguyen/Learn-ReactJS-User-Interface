import { createBrowserRouter } from "react-router-dom";
import RootPage from "../pages/RootPage";
import HomePage from "../pages/HomePage";
import TasksPage from "../pages/TasksPage";
import TaskForm from "../components/TaskForm";
import TaskDetailsPage from "../pages/TaskDetailsPage";
import TaskEditPage from "../pages/TaskEditPage";

export const router = createBrowserRouter([
  {
    path: "",
    element: <RootPage />,
    children: [
      { path: "", element: <HomePage /> },
      {
        path: "tasks",
        element: <TasksPage />,
        children: [{ path: "add", element: <TaskForm /> }],
      },
      { path: "tasks/:id", element: <TaskDetailsPage /> },
      { path: "tasks/:id/edit", element: <TaskEditPage /> },
    ],
  },
]);
