import Landing from './Landing'
import ErrorRouter from './ErrorRouter'
import Profile from './Profile'

export const publicRoute = () => {
  return [
    {
      path: "/",
      element: <Landing />,
      errorElement: <ErrorRouter />,
    },

  ]
}
export const privateRoute = () => {

  return [
    {
      path: "/profile",
      element: <Profile />,
      errorElement: <ErrorRouter />,
    },
  ]
}