import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";

import Enter from '../pages/Enter';
import Home from '../pages/Home';


const router = createBrowserRouter([
    {
        path: "/",
        element: <Enter />,
    },
    {
        path:'/home',
        element: <Home />,
    }
]);

export default router;