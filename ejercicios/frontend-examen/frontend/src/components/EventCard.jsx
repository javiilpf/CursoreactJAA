import { Link } from "react-router-dom";

const EventCard=({event})=>{
    console.log(event);
    //  nombre, fecha, tipo y valoración
// Formato de fecha en español
// Botones de edición/eliminación condicionales si estamos logueados o no
// { 
//     name: String,         // Nombre del evento (requerido) 
//     date: Date,          // Fecha del evento (requerido) 
//     type: String,                //  Tipo  de  evento  (requerido,  enum: 
//   ["conferencia", "concierto", "taller"]) 
//     description: String, // Descripción del evento (opcional) 
//       valoracion:  Number,    //  Valoración  del  evento  (opcional, 
//   rango: 1-5) 
//       createdAt:  Date,        //  Fecha  de  creación  (automático,  lo 
//   genera el backend) 
//       updatedAt:  Date          //  Fecha  de  última  actualización 
//   (automático, lo genera el backend) 
//   } 
    const valoracion=event.valoracion?event.valoracion.toFixed(1):"N/A";   
return(
        <Link to={`/`} className="bg-sky-800">
        <article className="card transform transition-transform duration-300 hover:scale-105">
          <div className="relative aspect-[2/3]">
            
            <div className="absolute top-2 right-2 bg-black bg-opacity-50 text-white py-1  px-2 rounded">
              ⭐ {valoracion}
            </div>

            <div className="p-4">
                <h3 className="font-bold text-lg line-clamp-2 text-white">{movie.title}</h3>
                <p className="text-sm text-gray-500 line-clamp-2" >
                    {valoracion.date}
                </p>
                <p className="text-sm text-gray-500 line-clamp-2" >
                    {valoracion.type}
                </p>
                <p className="text-sm text-gray-500 line-clamp-2" >
                    {valoracion.description}
                </p>
            </div>
            <div>
                <div>
                    <button>Editar</button>
                </div>
                <div>
                    <button>Eliminar</button>
                </div>
            </div>

          </div>
         
        </article>
      </Link>
    );
  };
  
export default EventCard;
    
