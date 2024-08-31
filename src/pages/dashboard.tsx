import { Session } from "@supabase/supabase-js";
import { useEffect, useState } from "react";
import { supabase } from "../services/supabase/create-client-supabase";
import { useNavigate } from "react-router-dom";


export default function dashboard(){

    const [session, setsession] = useState<Session | null>();
    const navigate = useNavigate()

    function handleLogOut(){
        supabase.auth.signOut

        useEffect(() => {
            navigate('/2')
        }, [navigate]);
    }


    return ( 
    <>
        <h1>log succes!!!</h1>
        <button onClick={ handleLogOut } > logout </button>
    </>
)
}