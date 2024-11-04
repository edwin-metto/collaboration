import React from 'react'

function Food() {

    const Food = [
      {
        name: 'Chicken pie',
        description: 'The best meal with some cheese',
        price: '$ 20',
        rating: '3'
      },
      {
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