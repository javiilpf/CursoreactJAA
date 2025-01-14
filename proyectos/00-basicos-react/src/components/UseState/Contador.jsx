import { useState } from "react"

const Contador = () => {
    // Espacio para declarar funciones
    //--------------------Espacio para los hooks---------------------------
    const [total, setTotal] = useState(0)
    //--------------------Espacio para declarar funciones-------------------
    
    function handleClick(numero=1){
        setTotal(total+numero)
        console.log(total)
        
    }
  return (
    <>
        <div>Contador en react</div>
        <h2>{total}</h2>

        <button onClick={()=>handleClick(1)}>Incrementar</button>	
        <button onClick={()=>handleClick(-1)}>Decrementar</button>

    </>
    
  )
}

export default Contador
