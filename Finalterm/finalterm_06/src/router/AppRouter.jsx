import { createBrowserRouter } from "react-router-dom";
import NotFoundPage from "../page/NotFoundPage";
import RootPage from "../page/RootPage";
import HomePage from "../page/HomePage";
import TaskPage from "../page/TaskPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootPage />,
    errorElement: <NotFoundPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/task",
        element: <TaskPage />,
      },
    ],
  },
]);

export default router;
