import { createBrowserRouter } from "react-router-dom";
import RootPage from "../page/RootPage";
import HomePage from "../page/HomePage";
import TaskPage from "../page/TaskPage";
import LoginPage from "../page/LoginPage";
import ProtectedRoute from "./ProtectedRoute";
import TaskCardDetail from "../components/TaskCardDetail";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "/login", element: <LoginPage /> },
      {
        path: "/task",
        element: (
          <ProtectedRoute>
            <TaskPage />
          </ProtectedRoute>
        ),
      },
      {
        path: "/task/:id",
        element: (
          <ProtectedRoute>
            <TaskCardDetail />
          </ProtectedRoute>
        ),
      },
    ],
  },
]);
