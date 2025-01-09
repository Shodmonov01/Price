import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Praspan from "../pages/Praspan";
import Linolit from "../pages/Linolit";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/praspan",
    element: <Praspan />,
  },
  {
    path: "/linolit",
    element: <Linolit />,
  },

]);
