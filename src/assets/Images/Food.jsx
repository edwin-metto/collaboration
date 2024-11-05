import React from 'react'
import { images } from './Images';
function Food() {

    const Food = [
      
      {
        image: images.Salad1,
        name: 'Sausage Salad',
        description: 'Well made Sausage Potato salad.',
        price: 20,
        rating: 3
      }, 
      {
        image:images.Salad2,
        name: 'Chicken Salad',
        description: 'Chipotle with chicken as Salad',
        price: 12,
        rating: '3'
      },
      {
        image:images.Salad3,
        name: 'Tomato Salad',
        description: 'The only salad with tomato plus cucumber',
        price: 12,
        rating: '3'
      },
      {
        image:images.Salad4,
        name: 'Chicken Salad',
        description: 'Well chopped chicken, corn and garlic Salad',
        price: '$ 12',
        rating: '3'
      },
      {
        image:images.Salad5,
        name: 'Mango Bliss Salad',
        description: 'Basic vegys, some fruit and beef',
        price:  12,
        rating: '3'
      },
      {
        image:images.Salad6,
        name: 'Avocado Tuna Salad',
        description: 'Tuna minst meat and vegy salad',
        price:  12,
        rating: '4'
      },

      {
        image:images.Roll1,
        name: 'Beef Rolls',
        description: 'Duogh, and beef rolled up',
        price: 15,
        rating: '5'
      },
      {
        image:images.Roll2,
        name: 'Chicken rolls',
        description: 'Chicken rolled up in flatbread ',
        price: 16,
        rating: '4'
      },
      {
        image:images.Roll3,
        name: 'Cheese Rolls',
        description: 'Cheese meal in rolls of pastrey',
        price: 20,
        rating: '5'
      },
      {
        image:images.Roll4,
        name: 'Beef Rolls',
        description: 'Normal rolls plus beef, with no extra stuff',
        price:  12,
        rating: '3'
      },
      {
        image:images.Roll5,
        name: 'Pizza Rolls',
        description: 'Made of cheese, pastrey, corrender and vegys',
        price: 12,
        rating: '5'
      },
      {
        image:images.Roll6,
        name: 'Food Rolls',
        description: 'Nice Salad rolled in pastrey',
        price: 17,
        rating: '4'
      },

      {
        image:images.Dessert1,
        name: 'Strawberry Dessert',
        description: 'More of a Cheese cake but desert with strawberry flavor',
        price: 10,
        rating: '3'
      },
      {
        image:images.Dessert2,
        name: 'Lemon Dessert',
        description: 'Lemon Dessert baked with nice cream',
        price: 6,
        rating: '4'
      },
      {
        image:images.Dessert3,
        name: 'Velvet Oreo Dessert Cake',
        description: 'Velvet Oreo Dessert Cake best for both events and meals',
        price: 17,
        rating: '3'
      },
      {
        image:images.Dessert4,
        name: 'Berry Dessert',
        description: 'Dessert made with berry as cream',
        price: 10,
        rating: '5'
      },
      {
        image:images.Dessert5,
        name: 'Strawberry Dessert Cake',
        description: 'Mix of srawberry as desert',
        price: 13,
        rating: '3'
      },

      {
        image:images.Cake1,
        name: 'Event Cake',
        description: 'Nice for birthday and party',
        price: 22,
        rating: '3'
      },
      {
        image:images.Cake2,
        name: 'Oreo Cake',
        description: 'Black creamed oreo flavour cake, both topping and body',
        price: 25,
        rating: '3'
      },
      {
        image:images.Cake3,
        name: 'Pink Cake',
        description: 'Strawberry flavoured pink colored cake',
        price: 20,
        rating: '3'
      },
      {
        image:images.Cake4,
        name: 'Monster Cake',
        description: 'Blue strawberry flavoured cake ',
        price: 10,
        rating: '3'
      },

      {
        image:images.Vegetables1,
        name: 'Vegetable Avocado',
        description: 'Vegetable with avocado',
        price: 12,
        rating: '4'
      },
      {
        image:images.Vegetables2,
        name: 'Vegetable Grilled',
        description: 'Vegetables well madi grilled',
        price: 17,
        rating: '3'
      },
      {
        image:images.Vegetables3,
        name: 'Fresh Vegys',
        description: 'More than just normal vegys',
        price: 10,
        rating: '4'
      },
      {
        image:images.Vegetables4,
        name: 'Salad Vegys',
        description: 'Salad made of full vegetable',
        price: 11,
        rating: '3'
      },
      {
        image:images.Vegetables5,
        name: 'Salata Vegy',
        description: 'Well made salata vegetables',
        price: 15,
        rating: '3'
      },

      {
        image:images.Noodles1,
        name: 'Sober Noodles',
        description: 'More than just the avarange noodles',
        price: 9,
        rating: '5'
      },
      {
        image:images.Noodles2,
        name: 'Sauce Noodles',
        description: 'Noodles with sauce, tomato paste',
        price: 12,
        rating: '3'
      },
      {
        image:images.Noodles3,
        name: 'Ramen Noodles',
        description: 'Noodles made having ramen',
        price: 10,
        rating: '3'
      },
      {
        image:images.Noodles4,
        name: 'Pepper Noodles',
        description: 'Well made noodles with pepper',
        price: 15,
        rating: '4'
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
                            <p className='text-orange-500 text-[20px]'>$ {meal.price}</p>
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
