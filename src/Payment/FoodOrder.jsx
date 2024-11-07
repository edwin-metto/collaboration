import React, { useState, useEffect } from 'react';
import { db, auth } from '../firebase'; 
import { setDoc, doc, Timestamp } from 'firebase/firestore'; 
import Carts from '../Components/Carts';

function FoodOrder({ foodOptions }) {
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

  const handleOrder = async () => {
    const user = auth.currentUser;
    if (user) {
      const orderData = {
        items: foodOptions.map((meal) => ({
          name: meal.name,
          quantity: quantities[meal.name],
          price: meal.price,
        })),
        totalPrice,
        date: Timestamp.now(),  
        userId: user.uid,       
      };

      try {
        
        const orderRef = doc(db, 'users', user.uid, 'orders', new Date().toISOString());
        await setDoc(orderRef, orderData);  
        console.log('Order placed successfully!');
      } catch (error) {
        console.error('Error placing order: ', error);
      }
    }
  };

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
      <button onClick={handleOrder} className="mt-4 p-2 bg-green-500 text-white rounded-xl">Place Order</button>
      <Carts />
    </div>
  );
}

export default FoodOrder;
