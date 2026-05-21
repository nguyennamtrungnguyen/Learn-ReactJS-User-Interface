import { createBrowserRouter } from "react-router-dom";
import HomePage from "../page/HomePage";
import AboutPage from "./../page/AboutPage";

const router = createBrowserRouter([
  {
    path: "/",
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/about",
        element: <AboutPage />,
      },
    ],
  },
]);

export default router;
