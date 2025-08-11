import { createBrowserRouter, RouterProvider } from "react-router";
import Layout from '../Page/Layout/Layout';
import Home from '../Page/Home/Home'
import Error from "../Page/Error/Error";

export const router = createBrowserRouter([
    {
        path: "/",
        Component: Layout,
        children: [
            {
                index: true,
                path: '/',
                Component: Home
            },
            {
                path: '/*',
                Component: Error
            }
        ]
    },
]);