import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import UsuarioPais from './components/UsuarioPais.jsx';
import Usuarios from './components/Usuarios.js';
import App from './App.tsx'
import './index.css'

const router = createBrowserRouter([
  { 
    path: '/', 
    element: <App />
  },
  { 
    path: '/usuarios', 
    element: <Usuarios />
  },
  { 
    path: '/usuarios/:pais', 
    element: <UsuarioPais />
  }
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
