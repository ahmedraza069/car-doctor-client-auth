import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'

import {
  RouterProvider,
} from "react-router-dom";
import router from './Routes/Rotues.jsx';
import AuthProviders from './providers/AuthProviders';

ReactDOM.createRoot(document.getElementById('root')).render(
 <div className='container mx-auto'>
   <React.StrictMode>
    <AuthProviders>
    <RouterProvider router={router} />
    </AuthProviders>
  </React.StrictMode>
 </div>,
)
