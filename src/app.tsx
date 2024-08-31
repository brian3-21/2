import { createBrowserRouter, RouterProvider } from "react-router-dom";

import TestPage from "./pages/test-page";
import LoginPage from "./pages/login";

export default function App(){

  
      const router = createBrowserRouter([
        {
          path: "2",
          element: <LoginPage/>,
          errorElement: <TestPage props='No existe la pagina' />,
        },
        {
          path: "*",
          element: <TestPage props='ruta *'/>,
          errorElement: <TestPage props='Error element'/>,
        },
        {
          path: "2/dashboard",
          element: <TestPage props='dashboard'/>,
          errorElement: <TestPage props='error element'/>,
        }, 
      ]);





      return(
         <RouterProvider router={router} />
      )





}