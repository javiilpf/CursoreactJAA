import { useEffect, useState } from "react"

const Timer = () => {
    const [setCounter, counter] = useState(0)
    useEffect(() => {
        // NUNCA  utilizar async await dentro de un useEffect
        console.log("Componente renderizado cada vez que se modivica algo del array de dependencias");

    }, [counter])
  return (
    <>
        <h1>{counter}</h1>
        <button onClick={()=>setCounter(prevCounter=>prevCounter+1)}>Iniciar</button>
    </>
    
  )
}

export default Timer