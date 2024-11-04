import React from 'react'
import { images } from './Images';
function Food() {

    const Food = [
      {
        image: images.Salad1,
        name: 'Sausage Salad',
        description: 'Well made Sausage Potato salad.',
        price: '$ 20',
        rating: '3'
      }, 
      {
        image:images.Salad2,
        name: 'Chicken Salad',
        description: 'Chipotle with chicken as Salad',
        price: '$ 12',
        rating: '3'
      },
      {
        image:images.Salad3,
        name: 'Aston Martin',
        description: 'DB12',
        price: '$ 12',
        rating: '3'
      },
      {
        image:images.Salad4,
        name: 'Aston Martin',
        description: 'DB12',
        price: '$ 12',
        rating: '3'
      },
      {
        image:images.Salad5,
        name: 'Aston Martin',
        description: 'DB12',
        price: '$ 12',
        rating: '3'
      },
      {
        image:images.Salad6,
        name: 'Aston Martin',
        description: 'DB12',
        price: '$ 12',
        rating: '3'
      }

    ];
  
    return (
        <div>
            <div>
                <ul className='flex flex-wrap  text-black'>
                    {Food.map((meal, index) => (
                        <div key={index} className='rounded-2xl bg-gray-200 m-5 overflow-hidden text-center max-w-60 shadow-lg transition ease-out delay-160 hover:scale-110 '>
                            <li><img src={meal.image} alt="" className='h-60 w-60 object-cover'/></li>
                            <li className='text-[20px]'>{meal.name}</li>
                            <li> {meal.description}</li>
                            <p className='text-orange-500 text-[20px]'> {meal.price}</p>
                            <li className='text-orange-500'>Rated, {meal.rating} &#9733; </li>
                        </div>
                    ))}
                </ul>

            </div>
            <div>
              <button >Place Order</button>
            </div>
        </div>
    )
}

export default Food
