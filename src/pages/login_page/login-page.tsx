import { useState, useEffect } from 'react'
import '../login_page/login-page.css'

import { Auth } from '@supabase/auth-ui-react'
import { ThemeSupa } from '@supabase/auth-ui-shared'
import Dashboard from '../dashboard/dashboard-component';
import { supabase } from '../../services/supabase/create-client-supabase';
import { Session } from '@supabase/supabase-js';




export default function LoginPage() {
  const [session, setSession] = useState<Session | null>(null)


  const handleLogout = async () => {
    await supabase.auth.signOut(); // Desloguear al usuario
    setSession(null); // Limpiar la sesión
  };
  

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session)
    })

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })

    

    return () => subscription.unsubscribe()
  }, [])

  if (!session) {
    return (
      <Auth
        supabaseClient={supabase}
        appearance={{ theme: ThemeSupa }}
        providers={[]} // Incluye solo los proveedores deseados
        dark= {true}
        theme='dark'
        
      />
    )
  } else {
    return (
      <>
        <Dashboard/>
        <button onClick={handleLogout}>Back</button>
      </>
    )
  }
}
