import { StrictMode, useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import TestPage from './pages/test-page';
import LoginPage from './pages/login';
import './index.css'
import { supabase } from './services/supabase/create-client-supabase';
import App from './app';



createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App/>
  </StrictMode>,
)
