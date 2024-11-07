import React, { useState, useEffect } from 'react';
import Food from '../assets/Images/Food';
import Carts from '../Components/Carts';


function FoodOrder({foodOptions}) {
  const [quantities, setQuantities] = useState(
    foodOptions.reduce((acc, food) => ({ ...acc, [food.name]: 1 }), {})
  );
  const [totalPrice, setTotalPrice] = useState(
    foodOptions.reduce((acc, food) => acc + food.price, 0)
  );

  const handleQuantityChange = (event, foodType) => {
    const qty = parseInt(event.target.value, 10);
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [foodType]: qty,
    }));
  };

  useEffect(() => {
    const newTotal = foodOptions.reduce(
      (acc, food) => acc + food.price * quantities[food.name],
      0
    );
    setTotalPrice(newTotal);
  }, [quantities]);

  return (
    <div className='p-4'>
      <div className="grid gap-4 bg-gray-100  rounded-xl">
        {foodOptions.map((meal, index) => (
          <div key={index} className="border m-2 p-2 rounded flex items-center justify-between text-green-600 hover:bg-gray-300 ">
            <img src={meal.image} alt="Food Image" className="w-10 h-10 object-cover rounded-full" />
            <p className="font-semibold">{meal.name}</p>
            <input
              type="number"
              min="1"
              value={quantities[meal.name]}
              onChange={(e) => handleQuantityChange(e, meal.name)}
              className="border p-1 text-center w-16"
            />
            <p className="text-orange-600 text-[20px]">${meal.price * quantities[meal.name]}</p>
          </div>
        ))}
      </div>
      <h4 className="mt-4 text-lg font-bold text-green-500">Total Price: ${totalPrice}</h4>
      <button className="mt-4 p-2">Place Order</button>
      <Carts/>
    </div>
  );
}

export default FoodOrder;
