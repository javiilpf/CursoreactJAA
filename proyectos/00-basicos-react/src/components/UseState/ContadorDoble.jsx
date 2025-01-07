import { useState } from "react";

const ContadorDoble = () => {
    // Hooks
    const [friends, setFriends] = useState({ Juan: 0, Pedro: 0, Maria: 0 });
    const [promedio, setPromedio] = useState(0);

    // Funciones
    const handleClick = (nombre, valor) => {
        setFriends((prevFriends) => ({
            ...prevFriends,
            [nombre]: prevFriends[nombre] + valor,
        }));
    };

    const handleClickpromedio = () => {
        // calcular el promedio de amigos de friends
        
        const sumaAmigos = Object.values(friends).reduce((a, b) => a + b, 0);
        const promedioCalculado = sumaAmigos / Object.keys(friends).length;
        setPromedio(promedioCalculado);
    };

    // Crear un contador que permita aumentar los amigos de Juan y los amigos de María
    return (
        <>
            <h1 className="text-2xl bg-cyan-600 text-center">Contador de amigos</h1>
            <div className="text-center">
                <span className="mb-5">
                    {" "}Juan tiene <strong>{friends.Juan}</strong> amigos
                </span>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => handleClick("Juan", 1)}>
                    Incrementar{" "}
                </button>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => handleClick("Juan", -1)}>
                    decrementar{" "}
                </button>
                <hr></hr>
                <br></br>

                <span className="mb-5">
                    {" "}Maria tiene <strong>{friends.Maria}</strong> amigos
                </span>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => handleClick("Maria", 1)}>
                    Incrementar{" "}
                </button>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => handleClick("Maria", -1)}>
                    decrementar{" "}
                </button>
                <hr></hr>
                <br></br>


                <span className="mb-5">
                    {" "}Pedro tiene <strong>{friends.Pedro}</strong> amigos
                </span>
                
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => handleClick("Pedro", 1)}>
                    Incrementar{" "}
                </button>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => handleClick("Pedro", -1)}>
                    decrementar{" "}
                </button>
                <br></br>
                <div>
                    <span>Promedio de amigos: <strong>{promedio}</strong></span>
                    <button className="bg-green-400 hover:bg-green-700 text-white font-bold py-2 px-4 rounded ml-4" onClick={handleClickpromedio}>
                        Calcular Promedio
                    </button>
                </div>
            </div>
        </>
    );
}

export default ContadorDoble;

