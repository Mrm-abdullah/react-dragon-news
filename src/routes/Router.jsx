import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../page/home/Home";

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
        //   path: "contacts/:contactId",
        //   element: <Contact />,
        },
      ],
    },
  ]);

export default router;