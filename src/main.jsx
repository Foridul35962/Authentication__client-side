import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Home from './pages/home.jsx'
import Register from './pages/register.jsx'
import Login from './pages/login.jsx'
import VerifyOtp from './pages/verifyOtp.jsx'
import Error from './pages/Error.jsx'

const router= createBrowserRouter([
  {
    path:"/",
    element: <App />,
    children:[
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/registration',
        element: <Register />
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/verifyOtp',
        element: <VerifyOtp />
      }
    ]
  },
  {
    path: '/*',
    element: <Error />
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
