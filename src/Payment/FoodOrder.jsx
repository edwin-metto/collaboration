import React, { useState } from 'react';


const foodOptions = [
  { type: 'Pizza', price: 10 },
  { type: 'Burger', price: 8 },
  { type: 'Pasta', price: 12 },
];

function FoodOrder() {
  const [selectedFood, setSelectedFood] = useState(foodOptions[0]);
  const [quantity, setQuantity] = useState(1);
  const [total, setTotal] = useState(selectedFood.price);

  
  const handleFoodChange = (event) => {
    const food = foodOptions.find((item) => item.type === event.target.value);
    setSelectedFood(food);
    setTotal(food.price * quantity);
  };

  
  const handleQuantityChange = (event) => {
    const qty = parseInt(event.target.value, 10);
    setQuantity(qty);
    setTotal(selectedFood.price * qty);
  };

  
  const handleOrder = () => {
    alert(`Order placed! \nFood: ${selectedFood.type}\nQuantity: ${quantity}\nTotal: $${total}`);
  };

  return (
    <div style={{ maxWidth: '300px', margin: 'auto' }}>
      <h3>Food Order</h3>
      <label>
        Select Food:
        <select value={selectedFood.type} onChange={handleFoodChange}>
          {foodOptions.map((food) => (
            <option key={food.type} value={food.type}>
              {food.type} - ${food.price}
            </option>
          ))}
        </select>
      </label>
      <br />
      <label>
        Quantity:
        <input
          type="number"
          min="1"
          value={quantity}
          onChange={handleQuantityChange}
        />
      </label>
      <br />
      <h4>Total: ${total}</h4>
      <button onClick={handleOrder}>Place Order</button>
    </div>
  );
}

export default FoodOrder;