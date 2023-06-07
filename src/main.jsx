import React from 'react'
import ReactDOM from 'react-dom/client'
import {

  RouterProvider,
} from "react-router-dom";
import "./index.css";
import './index.css'
import { router } from './Routes/Routes';
import { HelmetProvider } from 'react-helmet-async';


ReactDOM.createRoot(document.getElementById('root')).render(
  <HelmetProvider>
    <React.StrictMode>
      <div className='max-w-screen-xl mx-auto'>
        <RouterProvider router={router} />
      </div>

    </React.StrictMode>,
  </HelmetProvider>
)
