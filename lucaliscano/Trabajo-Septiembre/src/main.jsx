import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter} from 'react-router-dom'
import { RouterProvider } from 'react-router-dom'
import Usuarios from './Pages/Usuarios.jsx'

const router=createBrowserRouter(
  [
    {
      path:"/",
      element:<App/>
    },
    {
      path:"/usuarios",
      element:<Usuarios/>
    }
  ]
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
