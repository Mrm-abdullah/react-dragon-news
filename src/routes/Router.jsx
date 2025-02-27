import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../page/home/Home";
import Login from "../page/login/Login";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
    //   errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <Home></Home> ,
        },
        {
          path: "/login",
          element: <Login />,
        },
      ],
    },
  ]);

export default router;