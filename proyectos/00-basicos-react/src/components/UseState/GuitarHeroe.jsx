import { useState } from 'react'

const initialGuitars=[
    { name:"", price:0, type:"", image:""},
    { name: "Fender Stratocaster", price: 1200, type: "Electric", image: "stratocaster.jpg" },
    { name: "Gibson Les Paul", price: 1500, type: "Electric", image: "lespaul.jpg" },
    { name: "Ibanez RG", price: 1000, type: "Electric", image: "ibanezrg.jpg" },
    { name: "Yamaha Pacifica", price: 500, type: "Electric", image: "pacifica.jpg" },
    { name: "PRS Custom 24", price: 2000, type: "Electric", image: "prs24.jpg" },
    { name: "Epiphone SG", price: 600, type: "Electric", image: "sg.jpg" },
    { name: "Jackson Dinky", price: 800, type: "Electric", image: "dinky.jpg" },
    { name: "ESP Eclipse", price: 1800, type: "Electric", image: "eclipse.jpg" },
    { name: "Fender Telecaster", price: 1100, type: "Electric", image: "telecaster.jpg" },
    { name: "Gibson SG", price: 1400, type: "Electric", image: "gibsonsg.jpg" }
];

const handleSearch = (e) => {

}
const GuitarHeroe = () => {
    const [first, setFilterGuitars]=useState(initialGuitars)
    const [searchTerm, setSearchTerm]=useState("")
  return (
    <div className='max-w-2xl mx-auto bg-gray-200 nt-8 p-6 shadow-lg rounded-md'>
        {/* Titulo */}
        <h1 className='text-2xl font-bold text-center mb-6'>
            Filtro de guitarras
        </h1>
        {/* Formulario para buscar */}
        <div>
            <label className="block text-gray-700"></label>
            <input type="text" placeholder='Buscar Guitarra' value={searchTerm} onChange={handleSearch} />
        </div>
        {/* Lista de guitarras */}
        <div>
            {setFilterGuitars.map(guitar => (
                // Aquí tengo que renderizar una CardGuitar
                <div key={guitar.name} className='bg-white shadow-lg rounded-md p-4 mb-4 flex items-center justify-between'>
                    <h2  className='text-lg font-bold'>{guitar.price}</h2>
                    <h2 className='text-lg font-bold'>{guitar.type}</h2> 
                    <p className='text-lg font-bold'>{guitar.name}</p>
                    

                </div>
            ))}
        </div>

    </div>
  )
}

export default GuitarHeroe