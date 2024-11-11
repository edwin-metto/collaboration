import React, { useState, useEffect } from 'react';
import { db, auth } from './firebase';
import { collection, getDocs, updateDoc, doc, query, where } from 'firebase/firestore';
import { getUsers } from './firebase';

function AdminDashboard() {
    const [admined, setAdmined] = useState(false);
    const [orders, setOrders] = useState([]);
    const [users, setUsers] = useState([]);
    const [adminCredentials, setAdminCredentials] = useState({
        name: '',
        email: '',
        pass: ''
    });

    const AdminName = 'Edwin Metto';
    const AdminEmail = 'edwin@gmail.com';
    const AdminPass = 'potstore254';

    
    const [countFromLocalStorage, setCountFromLocalStorage] = useState(0);
    useEffect(() => {
        const savedCount = localStorage.getItem('count');
        if (savedCount) {
            const count = parseInt(savedCount, 10);
            setCountFromLocalStorage(count);
        }
    }, []);


    const checkAdmin = (e) => {
        e.preventDefault();
        const { name, email, pass } = adminCredentials;
        if (name === AdminName && email === AdminEmail && pass === AdminPass) {
            setAdmined(true);
            fetchOrders();
            fetchUsers();
        } else {
            setAdmined(null);
        }
    };


    const fetchOrders = async () => {
        const ordersSnapshot = await getDocs(collection(db, 'orders'));
        const ordersList = ordersSnapshot.docs.map(doc => ({
            ...doc.data(),
            id: doc.id
        }));
        setOrders(ordersList);
    };


    const fetchUsers = async () => {
        try {
            const userList = await getUsers();
            setUsers(userList);
        } catch (error) {
            console.error("Error fetching users: ", error);
        }
    };


    const updateOrderStatus = async (orderId, status) => {
        const orderRef = doc(db, 'orders', orderId);
        await updateDoc(orderRef, { status });
        setOrders(orders.map(order => order.id === orderId ? { ...order, status } : order));
    };


    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setAdminCredentials(prevState => ({ ...prevState, [name]: value }));
    };

    return (
        <div className='text-black m-10'>
            <div>
                {admined ? (
                    <div>
                        <h1>Admin Dashboard</h1>

                        <div> Orders: {countFromLocalStorage} </div>

                        <div>
                            <h2>Users</h2>
                            <table>
                                <thead>
                                    <tr>
                                        <th>User ID</th>
                                        <th>Name</th>
                                        <th>Email</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {users.map((user) => (
                                        <tr key={user.uid}>
                                            <td>{user.uid}</td>
                                            <td>{user.displayName || 'N/A'}</td>
                                            <td>{user.email}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>


                        <div>
                            <h2>Orders</h2>
                            <table>
                                <thead>
                                    <tr>
                                        <th>Order ID</th>
                                        <th>User ID</th>
                                        <th>Status</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {orders.map((order) => (
                                        <tr key={order.id}>
                                            <td>{order.id}</td>
                                            <td>{order.userId}</td>
                                            <td>{order.status}</td>
                                            <td>
                                                <button onClick={() => updateOrderStatus(order.id, 'preparing')}>Preparing</button>
                                                <button onClick={() => updateOrderStatus(order.id, 'completed')}>Completed</button>
                                                <button onClick={() => updateOrderStatus(order.id, 'canceled')}>Cancel</button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                ) : (
                    <div className='bg-gray-100 flex justify-center p-5 rounded-xl'>
                        <form>
                            <h2 className='font-bold m-2 text-[18px]'>Enter your admin details</h2>
                            <input
                                name="name"
                                value={adminCredentials.name}
                                onChange={handleInputChange}
                                type="text"
                                placeholder="Admin Name"
                                required
                            />
                            <input
                                name="email"
                                value={adminCredentials.email}
                                onChange={handleInputChange}
                                type="email"
                                placeholder="Email"
                                required
                            />
                            <input
                                name="pass"
                                value={adminCredentials.pass}
                                onChange={handleInputChange}
                                type="password"
                                placeholder="Password"
                                required
                            />
                            <button onClick={checkAdmin}>Login</button>
                        </form>
                    </div>
                )}
            </div>
            {admined === null && <div><h2 className='text-red-500 text-[30px]'>Wrong Admin Details</h2></div>}
        </div>
    );
}

export default AdminDashboard;
