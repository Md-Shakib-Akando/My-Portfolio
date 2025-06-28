import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './App.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import RootLayOut from './RootLayOut';
import Home from './Page/Home';
import About from './Components/About';
const router = createBrowserRouter([
  {
    path: "/",
    Component:RootLayOut,
    children:[
      {
        index:true, Component:Home,
      }
      
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
