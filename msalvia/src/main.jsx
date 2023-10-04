import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './Home.jsx';
import './index.css';
import {RouterProvider, createBrowserRouter, } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "usuarios/pais",
    element: "pais"

  },
  {
    path: "usuarios/nombre",
    element: "nombre"

  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
