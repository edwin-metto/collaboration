import React, { useEffect, useState } from 'react';
import { db, auth } from '../firebase';  
import { collection, query, where, getDocs } from 'firebase/firestore';  

function OrderHistory() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      const user = auth.currentUser;
      if (user) {
        try {
          const ordersQuery = query(
            collection(db, 'users', user.uid, 'orders')  
          );
          const querySnapshot = await getDocs(ordersQuery);
          const ordersData = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
          setOrders(ordersData);  
        } catch (error) {
          console.error('Error fetching orders: ', error);
        }
      }
    };

    fetchOrders();
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold text-green-600">Your Order History</h2>
      {orders.length === 0 ? (
        <p>No orders found.</p>
      ) : (
        <ul>
          {orders.map((order) => (
            <li key={order.id} className="border p-2 my-2 rounded">
              <p className="font-semibold">Order Date: {new Date(order.date.seconds * 1000).toLocaleDateString()}</p>
              <p className="font-semibold">Total: ${order.totalPrice}</p>
              <ul>
                {order.items.map((item, index) => (
                  <li key={index}>
                    {item.name} (x{item.quantity}) - ${item.price * item.quantity}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default OrderHistory;
