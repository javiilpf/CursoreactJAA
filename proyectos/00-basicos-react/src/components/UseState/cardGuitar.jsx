import React from 'react'

const CardGuitar = ({guitar}) => {
    const {name, type, price, image} = guitar;
  return (
    <>
      <div className='flex items-center justify-between bg-white p-4 rounded-md shadow-md mt-4'>
        <div>
          <h2 className='text-lg font-bold'>{name}</h2>
          <p className='text-sm text-gray-500'>{type}</p>
          <p className='text-2xl text-gray-500'>{price}€</p>
        </div>
        <img src={`./assets/${image}`} alt={name} className='w-24 h-24'/>
      </div>
    </>
  )
}

export default CardGuitar