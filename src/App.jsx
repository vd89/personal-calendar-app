import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { privateRoute, publicRoute } from './components/pages/root'

const checkAuth = () => { return false }
const App = () => {
  const router = createBrowserRouter([
    checkAuth ? privateRoute() : {}, ...publicRoute()
  ])
  return <RouterProvider router={router} />
}

export default App