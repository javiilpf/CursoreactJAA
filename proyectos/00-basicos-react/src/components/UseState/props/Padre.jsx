import { useState } from "react"
import Hijo from "./Hijo"

const Padre = () => {
    const [counter, setCounter ]= useState(0)
    const handleClick = () => {
        setCounter((prevCounter) => prevCounter + 1);
    }
  return (
    <>
    <div>Hola soy tu Padre</div>
    <Hijo counter={counter} setCounter={setCounter}/>
    </>
  )
}

export default Padre