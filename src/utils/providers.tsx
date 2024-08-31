
import { AuthSession, Session } from "@supabase/supabase-js"
import { Children, createContext, useEffect, useState } from "react"
import { Outlet } from "react-router-dom"
import { supabase } from "../services/supabase/create-client-supabase"

type GlobalContextProps = {
    session: AuthSession | null
}

type Props = {
    children?: JSX.Element
}

export const GlobalContextProps = createContext<GlobalContextProps>(undefined!)

export const GlobalProvider= ( { children = <Outlet/> }: Props) =>{

    const  [session, setSession] = useState<Session | null>(null);

    useEffect(() => {
        cosnt { date: {subscription} } = supabase.auth.onAuthStateChange(async (event , session) =>
        
            {   
                console.log(event, session);
                setSession(session)
            }
        )
        return () =>{
            subscription.
        }
    }, []);

}