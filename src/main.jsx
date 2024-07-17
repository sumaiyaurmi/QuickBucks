import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root';
import Login from './components/Login';
import Registration from './components/Registration';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:([
      {
        path:'/',
        element:<Login></Login>,
      },
      {
        path:'/registration',
        element:<Registration></Registration>,
      },
    ])
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
 <RouterProvider router={router} />  </React.StrictMode>,
)
