import '../login_page/login-page.css'

import { Auth } from '@supabase/auth-ui-react'
import { ThemeSupa } from '@supabase/auth-ui-shared'
import { supabase } from '../../services/supabase/create-client-supabase';




export default function LoginPage() {
  
    return (
      <Auth
        magicLink= {true}
        supabaseClient={supabase}
        appearance={{ theme: ThemeSupa }}
        providers={[]} // Incluye solo los proveedores deseados
        dark= {true}
        theme='dark' 
        
      />
    )
  
}
