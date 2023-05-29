import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router";
import Login from "./screens/login";
import SignUp from "./screens/signup";
import Dashboard from "./screens/dashboard";
import Test from "./screens/test";
import { Toaster } from "react-hot-toast";
import TestResult from "./screens/test_result";
import Videos from "./screens/videos";
import Recommended from "./screens/recommended";

const root = ReactDOM.createRoot(document.getElementById("root"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/test",
    element: <Test />,
  },
  {
    path: "/test_result",
    element: <TestResult />,
  },
  {
    path: "/recommended",
    element: <Recommended />,
  },
  {
    path: "/videos",
    element: <Videos />,
  },
]);

root.render(
  <React.StrictMode>
<Toaster
  position="top-center"
  reverseOrder={false}
  gutter={8}
  containerClassName=""
  containerStyle={{}}
  toastOptions={{
    // Define default options
    className: '',
    style: {
      background: '#363636',
      color: '#fff',
    },

    // Default options for specific types
    success: {
      duration: 3000,
      theme: {
        primary: 'green',
        secondary: 'black',
      },
    },
  }}
/>
      <RouterProvider router={router} />
  </React.StrictMode>
);
