import {
    createBrowserRouter,
  } from "react-router-dom";

import Enter from '../pages/Enter';
import Home from '../pages/Home';
import Photos from "../pages/Photos";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Enter />,
    },
    {
        path:'/home',
        element: <Home />,
    },
    {
        path:'/photos',
        element: <Photos />,
    }
]);

export default router;