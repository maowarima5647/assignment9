import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import router from './ROUTS/router.jsx'
import { RouterProvider } from "react-router-dom";
import Authprovider from './provider/Authprovider.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Authprovider>
    <RouterProvider router={router} />
    </Authprovider>
   
  </StrictMode>,
)
