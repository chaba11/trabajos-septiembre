import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import UsuarioPais from "./components/UsuarioPais";
import Usuario from "./components/Usuario";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/usuarios",

    element: <Usuario />,
  },

  {
    path: "/usuarios/:pais",
    element: <UsuarioPais />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
