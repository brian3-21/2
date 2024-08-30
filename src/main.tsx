import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from './pages/test-page';
import LoginPage from './pages/login';
import './index.css'

const router = createBrowserRouter([
  {
    path: "/login",
    element: <LoginPage/>,
    errorElement: <ErrorPage/>
  },
  {
    
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
