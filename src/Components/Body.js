import React, { useEffect } from "react";
import Login from "../pages/Login";
import Browse from "../pages/Browse";
import { createBrowserRouter} from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import appRouter from "../router/AppRouter";
// import { useDispatch } from "react-redux";

const Body = () => {
  // const navigate = useNavigate();

  


  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
