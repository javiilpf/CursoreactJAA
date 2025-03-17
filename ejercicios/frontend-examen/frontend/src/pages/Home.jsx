

import { useEffect } from "react";


const Home = () => {
  
  useEffect(() => {
    
  }, [])
  
  


  return (
    
    <div className="max-w-7xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Lista de Eventos</h1>
      </div>

      {/* Filtros */}
      <div className="bg-white p-6 rounded-xl shadow-md mb-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Buscar por nombre
            </label>
            <input className="w-full p-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500" />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Tipo de evento
            </label>
            <select className="w-full p-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500">
              <option value="">Todos</option>
              <option value="conferencia">Conferencia</option>
              <option value="concierto">Concierto</option>
              <option value="taller">Taller</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Fecha
            </label>
            <input className="w-full p-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500" />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Ordenar por fecha
            </label>
            <select className="w-full p-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500">
              <option value="newest">Más reciente primero</option>
              <option value="oldest">Más antiguo primero</option>
            </select>
          </div>
        </div>

        <div className="mt-6 flex justify-end">
          <button className="bg-gray-100 text-gray-700 px-5 py-2 rounded-lg hover:bg-gray-200 transition-colors">
            Limpiar filtros
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
              
  
            
         
        </div>
      </div>
  );
};

export default Home;
