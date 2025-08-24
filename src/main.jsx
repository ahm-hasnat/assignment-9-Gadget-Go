import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from "react-router/dom";
import { router } from './pages/Router/Router.jsx';
import Provider from './AuthProvider/Provider.jsx';
import { HelmetProvider } from 'react-helmet-async';







createRoot(document.getElementById('root')).render(
  <StrictMode>
  
    <HelmetProvider>
       <Provider>
   <RouterProvider router={router} />
   
   </Provider>
      
  
    </HelmetProvider>
   
  </StrictMode>
)