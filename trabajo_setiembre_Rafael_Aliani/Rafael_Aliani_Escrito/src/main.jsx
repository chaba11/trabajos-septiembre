import React from "react";
import ReactDOM from "react-dom/client";
import { Home } from "./components/Home/Home.jsx";
import { User } from "./components/user/userComponent.jsx";
import { UserCountry } from "./components/User/userCountryComponent.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "User",
    element: <User />,
  },
  {
    path: "/user/:country",
    element: <UserCountry />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
