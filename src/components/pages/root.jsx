import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Landing from './Landing'
import ErrorRouter from './ErrorRouter'

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
    errorElement: <ErrorRouter />,
  },
  {}
])
