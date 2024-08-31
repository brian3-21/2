import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginPage from "./pages/login";
import TestPage from "./pages/test-page";

export default function App(){

  
      const router = createBrowserRouter([
        {
          path: "2/login",
          element: <LoginPage/>,
          errorElement: <TestPage props='No existe la pagina' />,
        },
        {
          path: "*",
          element: <TestPage props='ruta *'/>,
          errorElement: <TestPage props='Error element'/>,
        },
        {
          path: "2/test",
          element: <TestPage props='wiri wiri'/>,
          errorElement: <TestPage props='test'/>,
        }, 
      ]);





      return(
         <RouterProvider router={router} />
      )





}