//const supabase = createClient("https://fpgwztrtwrbpxysdksgo.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZwZ3d6dHJ0d3JicHh5c2Rrc2dvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjM0Mjg3NDQsImV4cCI6MjAzOTAwNDc0NH0.-zuofJ_i1wOQ-iqazI0GfERBmUSXGKlwiLV6P8ItFN4");


import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient("https://fpgwztrtwrbpxysdksgo.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZwZ3d6dHJ0d3JicHh5c2Rrc2dvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjM0Mjg3NDQsImV4cCI6MjAzOTAwNDc0NH0.-zuofJ_i1wOQ-iqazI0GfERBmUSXGKlwiLV6P8ItFN4");


interface Persona{
  nombre:string,
  edad:number,
}


function App() {
  const [ personas , setPersonas] = useState<Persona[] | null>([]);

  useEffect(() => {
    getPersonas();
  }, []);

  async function getPersonas() {
    const { data, error, status, statusText } = await supabase.from("Persona").select();
  
    if (error) {
      console.log(`Error (${status}): ${statusText} - ${error.message}`);
    } else {
      console.log("Datos recibidos:", data);
      setPersonas(data);
    }
  }
  

  return (
    <ul>
      {personas!.map((persona) => (
        <li key={`${persona.nombre}-${persona.edad}`}>
          <h1>{persona.nombre}</h1>
          <h1>{persona.edad}</h1>
        </li>
      ))}
    </ul>
  );
}

export default App;