import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import PhotographyPage from './pages/photography_page';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"
import Resume from './pages/resume';
import DestinationSpotter from './pages/DestinationSpotter';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "photography",
    element: <PhotographyPage/>,
  },
  {
    path: "DestinationSpotter",
    element: <DestinationSpotter/>,
  },
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
