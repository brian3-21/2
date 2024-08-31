import { supabase } from "./services/supabase/create-client-supabase";
import { useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginPage from "./pages/login";
import TestPage from "./pages/test-page";

export default function App(){
    useEffect(() => {
        supabase.auth.onAuthStateChange((event:string, session:any) =>{
          if(!session){
            console.log("No estas logueado");
            console.log(session)
          }else{
            console.log("Si estas logueado");
          }
        })
      }, []);
      
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
      ]);





      return(
        // <RouterProvider router={router} />
        <div className="App">
            <h1 className="text-3xl text-center font-bold underline">Hello world!</h1>
        </div>
      )





}