import { useState } from "react"
import Hijo2 from "./Hijo2"

const Padre2 = () => {
    const [counter, setCounter ]= useState(0)
    const handleClick = () => {
        setCounter((prevCounter) => prevCounter + 1);
    }
  return (
    <>
    <div>Hola soy tu Padre</div>
    <Hijo2 counter={counter} setCounter={setCounter}/>
    </>
  )
}

export default Padre2