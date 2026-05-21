import { createBrowserRouter } from "react-router-dom";
import HomePage from "../page/HomePage";
import AboutPage from "./../page/AboutPage";
import RootPage from "../page/RootPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootPage />,
    children: [
      {
        index: true,
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
