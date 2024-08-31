import { supabase } from "../services/supabase/create-client-supabase"
import { TestProps } from "../utils/interfase"


// are the same this or funcion 
const TestPage = ({props = 'error'}:TestProps) =>{

  return (
    <>
      <h1>Wiri {props}</h1>
      <button onClick={() => {supabase.auth.signOut()}}>logout</button>
    </>
  )
}

export default TestPage