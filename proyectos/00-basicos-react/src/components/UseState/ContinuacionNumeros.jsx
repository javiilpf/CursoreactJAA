//hacer una funcion que añada el numero siguiente a mi array de numeros.
const ContinuacionNumeros = () => {
    const [numbers, setNumbers]=useState([5,4,3,1,4]);
    const addNextNumber=() => {
        const maxNumber = Math.max(...numbers);
    }
  return (
    <div>ContinuacionNumeros</div>
  )
}

export default ContinuacionNumeros