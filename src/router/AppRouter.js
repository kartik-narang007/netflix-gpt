import { createBrowserRouter } from "react-router-dom";
import Browse from "../pages/Browse";
import Login from "../pages/Login";



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

export default appRouter;