import React from 'react'
import { images } from './Images';
function Food() {

    const Food = [
      {
        image: images.Salad1,
        name: 'Chicken pie',
        description: 'The best meal with some cheese',
        price: '$ 20',
        rating: '3'
      },
      {
        image:images.Salad2,
        name: 'Aston Martin',
        description: 'DB12',
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
            <h1>Food</h1>
            <div>
                <ul>
                    {Food.map((meal, index) => (
                        <div key={index}>
                            <li><img src={meal.image} alt="" /></li>
                            <li>Name: {meal.name}</li>
                            <li> {meal.description}</li>
                            <li> {meal.price}</li>
                            <li>Rt {meal.rating} &#9733; </li>
                        </div>
                    ))}
                </ul>

            </div>
        </div>
    )
}

export default Food