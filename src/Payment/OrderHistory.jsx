import React, { useState, useEffect } from 'react';

const OrderHistory = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
  
    const fetchOrderHistory = async () => {
      const response = await fetch('/api/orders'); 
      const data = await response.json();
      setOrders(data);
    };

    fetchOrderHistory();
  }, []);

  return (
    <div className="order-history">
      <h2>Order History</h2>
      <div className="order-list">
        {orders.length === 0 ? (
          <p>No orders yet.</p>
        ) : (
          orders.map((order) => (
            <div key={order.id} className="order-item">
              <h3>Order #{order.id}</h3>
              <p><strong>Date:</strong> {new Date(order.date).toLocaleDateString()}</p>
              <p><strong>Status:</strong> {order.status}</p>
              <p><strong>Total:</strong> ${order.total}</p>
              <div className="order-items">
                <h4>Items:</h4>
                <ul>
                  {order.items.map((item) => (
                    <li key={item.id}>
                      {item.name} - {item.quantity} x ${item.price}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default OrderHistory;