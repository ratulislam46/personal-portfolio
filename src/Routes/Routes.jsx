import { createBrowserRouter, RouterProvider } from "react-router";
import Layout from '../Page/Layout/Layout';
import Home from '../Page/Home/Home'
import About from "../Page/About/About";

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
                path: '/about',
                Component: About
            }
        ]
    },
]);