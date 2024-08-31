import { useState, useEffect } from 'react'
import './login-page.css'

import { Auth } from '@supabase/auth-ui-react'
import { ThemeSupa } from '@supabase/auth-ui-shared'
import Dashboard from '../components/dashboard-component';
import { Session } from '@supabase/supabase-js';

import { supabase } from '../services/supabase/create-client-supabase';



export default function LoginPage() {
  const [session, setSession] = useState<Session | null>(null)


  const handleLogout = async () => {
    await supabase.auth.signOut(); // Desloguear al usuario
    setSession(null); // Limpiar la sesión
  };
  

 

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
        <h2>test</h2>
        <button onClick={ handleLogout}>logout</button>
      </>
    )
  }
}
