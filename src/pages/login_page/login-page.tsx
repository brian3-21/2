import { useState, useEffect } from 'react'
import { createClient, Session } from '@supabase/supabase-js'
import { Auth } from '@supabase/auth-ui-react'
import { ThemeSupa } from '@supabase/auth-ui-shared'


const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY
);

export default function LoginPage() {
  const [session, setSession] = useState<Session | null>(null)


  const handleLogout = async () => {
    await supabase.auth.signOut(); // Desloguear al usuario
    setSession(null); // Limpiar la sesión
    // navigate('/'); // Redirigir a la pantalla principal
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
        <button onClick={handleLogout}>Back</button>
      </>
    )
  }
}
