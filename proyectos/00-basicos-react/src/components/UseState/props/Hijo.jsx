import Nieto from "./Nieto"


const Hijo = (props) => {
    const {counter, handleClick}=props;
    console.log(props)
    const handleClick = () => {
        setCounter((prevCounter) => prevCounter + 1);
    }
  return (
    <>
    <div>Hola, yo soy ty hijo</div>
    <p>El contador vale {counter}</p>
    <button className="bg-slate-600 px-2 py-5 mb-5 mt-6" onClick={handleClick}>Aumento el contador desde el hijo</button>
    <Nieto handleClick={handleClick} />
    </>
  )
}

export default Hijo