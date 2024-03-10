import React, { useEffect } from "react";
import Login from "../pages/Login";
import Browse from "../pages/Browse";
import { createBrowserRouter} from "react-router-dom";
import { RouterProvider } from "react-router-dom";
// import { useDispatch } from "react-redux";

const Body = () => {
  // const navigate = useNavigate();

  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
  ]);


  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
