import Home from './pages/home/Home'
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'
import Users from './pages/users/Users'
import Menu from './components/menu/Menu'
import './styles/global.css'

function App() {
  const Layout = () => {
    return (
      <div className="main">
        <div className="container">
          <div className="menuContainer">
            <Menu />
          </div>
          <div className="contentContainer">
            <Outlet />
          </div>
        </div>
      </div>
    )
  }

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: '/',
          element: <Home />,
        },
        {
          path: '/users',
          element: <Users />,
        },
      ],
    },
  ])

  return <RouterProvider router={router} />
}

export default App
