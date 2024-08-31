import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import TestPage from './pages/test-page';
import LoginPage from './pages/login';
import './index.css'

const router = createBrowserRouter([
  {
    path: "/login",
    element: <LoginPage/>,
    errorElement: <TestPage/>
  },
  {
    path: "*",
    element: <></>,
    errorElement: <TestPage/>,
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
