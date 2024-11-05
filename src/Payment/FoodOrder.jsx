import React, { useState, useEffect } from 'react';

const foodOptions = [
  { type: 'Pizza', price: 10 },
  { type: 'Burger', price: 8 },
  { type: 'Pasta', price: 12 },
];

function FoodOrder() {
  const [quantities, setQuantities] = useState(
    foodOptions.reduce((acc, food) => ({ ...acc, [food.type]: 1 }), {})
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
      (acc, food) => acc + food.price * quantities[food.type],
      0
    );
    setTotalPrice(newTotal);
  }, [quantities]);

  return (
    <div className='p-4'>
      <h3 className="text-xl font-bold mb-4 text-orange-600 ">Food Order</h3>
      <div className="grid gap-4 bg-gray-100  rounded-xl">
        {foodOptions.map((meal, index) => (
          <div key={index} className="border m-2 p-2 rounded flex items-center justify-between text-green-600 hover:bg-gray-300 ">
            <img src="" alt="Food Image" className="w-7 h-7" />
            <p className="font-semibold">{meal.type}</p>
            <input
              type="number"
              min="1"
              value={quantities[meal.type]}
              onChange={(e) => handleQuantityChange(e, meal.type)}
              className="border p-1 text-center w-16"
            />
            <p className="text-orange-600 text-[20px]">${meal.price * quantities[meal.type]}</p>
          </div>
        ))}
      </div>
      <h4 className="mt-4 text-lg font-bold ">Total Price: ${totalPrice}</h4>
      <button className="mt-4 p-2">Place Order</button>
    </div>
  );
}

export default FoodOrder;
