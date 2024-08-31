import { FormEventHandler, useEffect, useState } from 'react';
import {supabase} from '../services/supabase/create-client-supabase'
import { Auth } from '@supabase/auth-ui-react';
import { ThemeSupa } from '@supabase/auth-ui-shared';

export default function LoginPage() {


  return (
  <Auth
        supabaseClient={supabase}
        appearance={{ theme: ThemeSupa }}
        providers={[]} // Incluye solo los proveedores deseados
        dark= {true}
        theme='dark'   
  />
  );
}