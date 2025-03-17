import { useState } from "react";
import { Navigate } from "react-router-dom";
// import { useEvent } from "../hooks/useEvent";


const EventForm = () => {
  // const {CreateEvents}=useEvent();
  const [formData, setFormData] = useState({
    name: "",
    date: "",
    type:"",
    description:"",
    valoracion:"",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value.trim(),
    });
  };
  const handleSubmitEnviar = async (e) => {
    e.preventDefault();
    try {
      // await CreateEvents(formData);
      Navigate("/products");
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div>
      <div>
        <h3>Crear Nuevo Evento</h3>
      </div>
      <div>
        <form className="space-y-4">
          <div>
            <p>Nombre:</p>
            <input 
              type="text" 
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
            ></input>
          </div>
          <div>
            <p>Fecha:</p>
            <input 
              type="date" 
              id="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              >
                25/02/2025
            </input>
          </div>
          <div>
            <p>Tipo:</p>
            <input 
            type="select" 
            id="type"
              name="type"
              value={formData.type}
            onChange={handleChange}
            >
              <option>Conferencia</option>
              <option>Concierto</option>
              <option>Taller</option>
            </input>
          </div>

          <div>
            <p>Descripcion</p>
            <input 
            type="text" 
            id="description"
              name="description"
              value={formData.description}
               onChange={handleChange}
            >
            </input>
          </div>
          <div>
            <p>Valoración(1-5)</p>
            <input 
            type="number" 
            id="valoracion"
              name="valoracion"
              value={formData.valoracion}
            onChange={handleChange}
            >1</input>
          </div>
          <div>
            <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-500 hover:bg-blue-600 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-blue-500"
            value={handleSubmitEnviar}
          >
            Enviar
            </button>
            <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-500 hover:bg-blue-600 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-blue-500"
            // value={handleSubmitCancelar}
          >
            Cancelar
            </button>

          </div>
        </form>

      </div>
    </div>
  )
}

export default EventForm