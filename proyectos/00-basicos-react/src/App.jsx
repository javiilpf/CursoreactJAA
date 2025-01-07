import Contador from "./components/UseState/Contador"
import ContadorDoble from "./components/UseState/ContadorDoble"

const App = () => {
  return (
    <>
    <div className="text-3xl font-bold underline">Hola mundo</div>
    <Contador/>
    <hr></hr>
    <ContadorDoble/>
    </>
  )
}

export default App
