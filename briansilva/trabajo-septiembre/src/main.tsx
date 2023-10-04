import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Home } from "./components/homeComponent.tsx";
import { UsersPais } from "./components/userComponent.tsx";
import { Users } from "./components/usersComponent.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/usuarios",
    element: <Users />,
  },
  {
    path: "/usuarios/:pais",
    element: <UsersPais />,
  },
]);
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
