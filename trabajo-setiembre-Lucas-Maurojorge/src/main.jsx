import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import { Users } from "./components/users/Users.jsx";
import { CountryUsers } from "./components/countryUsers/CountryUsers.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/usuarios",
    element: <Users />,
  },
  {
    path: "/usuarios/:pais",
    element: <CountryUsers />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
