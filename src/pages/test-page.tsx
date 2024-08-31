import { TestProps } from "../utils/interfase"


// are the same this or funcion 
const TestPage = ({props = 'error'}:TestProps) =>{
  return (
    <>
      <h1>Wiri {props}</h1>
    </>
  )
}

export default TestPage