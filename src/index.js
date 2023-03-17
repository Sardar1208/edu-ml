import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, } from "react-router-dom";
import { RouterProvider } from 'react-router';
import Login from "./screens/login";
import SignUp from "./screens/signup";
import Dashboard from "./screens/dashboard";
import Test from "./screens/test";


const root = ReactDOM.createRoot(document.getElementById("root"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />   
  }, 
  {
    path: "/signup",
    element: <SignUp />   
  }, 
  {
    path: "/dashboard",
    element: <Dashboard />   
  }, 
  {
    path: "/test",
    element: <Test />   
  }, 
])


root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);
