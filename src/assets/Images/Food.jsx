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
      },

      {
        image:images.Roll1,
        name: 'Rolls',
        description: 'DB12',
        price: '$ 12',
        rating: '3'
      },
      {
        image:images.Roll2,
        name: 'Rolls',
        description: 'DB12',
        price: '$ 12',
        rating: '3'
      },
      {
        image:images.Roll3,
        name: 'Rolls',
        description: 'DB12',
        price: '$ 12',
        rating: '3'
      },
      {
        image:images.Roll4,
        name: 'Rolls',
        description: 'DB12',
        price: '$ 12',
        rating: '3'
      },
      {
        image:images.Roll5,
        name: 'Rolls',
        description: 'DB12',
        price: '$ 12',
        rating: '3'
      },
      {
        image:images.Roll6,
        name: 'Rolls',
        description: 'DB12',
        price: '$ 12',
        rating: '3'
      },

      {
        image:images.Dessert1,
        name: 'Rolls',
        description: 'DB12',
        price: '$ 12',
        rating: '3'
      },
      {
        image:images.Dessert2,
        name: 'Rolls',
        description: 'DB12',
        price: '$ 12',
        rating: '3'
      },
      {
        image:images.Dessert3,
        name: 'Rolls',
        description: 'DB12',
        price: '$ 12',
        rating: '3'
      },
      {
        image:images.Dessert4,
        name: 'Rolls',
        description: 'DB12',
        price: '$ 12',
        rating: '3'
      },
      {
        image:images.Dessert5,
        name: 'Rolls',
        description: 'DB12',
        price: '$ 12',
        rating: '3'
      },

      {
        image:images.Cake1,
        name: 'Rolls',
        description: 'DB12',
        price: '$ 12',
        rating: '3'
      },
      {
        image:images.Cake2,
        name: 'Rolls',
        description: 'DB12',
        price: '$ 12',
        rating: '3'
      },
      {
        image:images.Cake3,
        name: 'Rolls',
        description: 'DB12',
        price: '$ 12',
        rating: '3'
      },
      {
        image:images.Cake4,
        name: 'Rolls',
        description: 'DB12',
        price: '$ 12',
        rating: '3'
      },

      {
        image:images.Vegetables1,
        name: 'Rolls',
        description: 'DB12',
        price: '$ 12',
        rating: '3'
      },
      {
        image:images.Vegetables2,
        name: 'Rolls',
        description: 'DB12',
        price: '$ 12',
        rating: '3'
      },
      {
        image:images.Vegetables3,
        name: 'Rolls',
        description: 'DB12',
        price: '$ 12',
        rating: '3'
      },
      {
        image:images.Vegetables4,
        name: 'Rolls',
        description: 'DB12',
        price: '$ 12',
        rating: '3'
      },
      {
        image:images.Vegetables5,
        name: 'Rolls',
        description: 'DB12',
        price: '$ 12',
        rating: '3'
      },

      {
        image:images.Noodles1,
        name: 'Rolls',
        description: 'DB12',
        price: '$ 12',
        rating: '3'
      },
      {
        image:images.Noodles2,
        name: 'Rolls',
        description: 'DB12',
        price: '$ 12',
        rating: '3'
      },
      {
        image:images.Noodles3,
        name: 'Rolls',
        description: 'DB12',
        price: '$ 12',
        rating: '3'
      },
      {
        image:images.Noodles4,
        name: 'Rolls',
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