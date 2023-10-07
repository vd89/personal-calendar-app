import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import './App.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './components/pages/root.jsx'
import { GoogleOAuthProvider } from '@react-oauth/google'


ReactDOM.createRoot(document.getElementById('root')).render(
  <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}>

  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
  </GoogleOAuthProvider>
)
