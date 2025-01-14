

const Nieto2 = (props) => {
    const { counter, handleClick}=props;
    console.log(props)
    // const handleClick = () => {
    //     setCounter((prevCounter) => prevCounter + 1);
    // }
  return (
    <>
    <div> hola soy tu Nieto</div>
    <p> El contador vale </p>
    <button className="bg-slate-600 px-2 py-5 mb-5 mt-6" onClick={handleClick}>Aumento el contador desde el nieto</button>
    
    </>
    
  )
}

export default Nieto2