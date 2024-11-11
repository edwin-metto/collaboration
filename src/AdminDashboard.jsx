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
        <div className="bg-gray-50 min-h-screen py-10 px-5">
            <div className="max-w-4xl mx-auto p-5 bg-white shadow-xl rounded-xl">
                {admined ? (
                    <div>
                        <h1 className="text-4xl font-bold text-center text-blue-600 mb-8">Admin Dashboard</h1>

                        
                        <div className="mb-10">
                            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Users</h2>
                            <table className="min-w-full table-auto">
                                <thead className="bg-gray-200">
                                    <tr>
                                        <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">User ID</th>
                                        <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Name</th>
                                        <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Email</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {users.map((user) => (
                                        <tr key={user.uid} className="border-t">
                                            <td className="px-6 py-3 text-sm text-gray-700">{user.uid}</td>
                                            <td className="px-6 py-3 text-sm text-gray-700">{user.displayName || 'N/A'}</td>
                                            <td className="px-6 py-3 text-sm text-gray-700">{user.email}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                    
                        <div>
                            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Orders</h2>
                            <table className="min-w-full table-auto">
                                <thead className="bg-gray-200">
                                    <tr>
                                        <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Order ID</th>
                                        <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">User ID</th>
                                        <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Status</th>
                                        <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {orders.map((order) => (
                                        <tr key={order.id} className="border-t">
                                            <td className="px-6 py-3 text-sm text-gray-700">{order.id}</td>
                                            <td className="px-6 py-3 text-sm text-gray-700">{order.userId}</td>
                                            <td className="px-6 py-3 text-sm text-gray-700">{order.status}</td>
                                            <td className="px-6 py-3 text-sm">
                                                <button
                                                    onClick={() => updateOrderStatus(order.id, 'preparing')}
                                                    className="bg-yellow-400 hover:bg-yellow-500 text-white px-3 py-1 rounded-lg mr-2"
                                                >
                                                    Preparing
                                                </button>
                                                <button
                                                    onClick={() => updateOrderStatus(order.id, 'completed')}
                                                    className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded-lg mr-2"
                                                >
                                                    Completed
                                                </button>
                                                <button
                                                    onClick={() => updateOrderStatus(order.id, 'canceled')}
                                                    className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-lg"
                                                >
                                                    Cancel
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                ) : (
                    <div className="bg-gray-100 p-6 rounded-xl shadow-lg flex justify-center items-center">
                        <form className="w-full max-w-md space-y-6">
                            <h2 className="text-2xl font-bold text-center text-gray-700 mb-4">Enter Admin Details</h2>
                            <div>
                                <input
                                    name="name"
                                    value={adminCredentials.name}
                                    onChange={handleInputChange}
                                    type="text"
                                    placeholder="Admin Name"
                                    className="w-full p-3 bg-white rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    required
                                />
                            </div>
                            <div>
                                <input
                                    name="email"
                                    value={adminCredentials.email}
                                    onChange={handleInputChange}
                                    type="email"
                                    placeholder="Email"
                                    className="w-full p-3 bg-white rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    required
                                />
                            </div>
                            <div>
                                <input
                                    name="pass"
                                    value={adminCredentials.pass}
                                    onChange={handleInputChange}
                                    type="password"
                                    placeholder="Password"
                                    className="w-full p-3 bg-white rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    required
                                />
                            </div>
                            <button
                                onClick={checkAdmin}
                                className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-md"
                            >
                                Login
                            </button>
                        </form>
                    </div>
                )}
            </div>

            {admined === null && (
                <div className="mt-6 text-center text-red-500 text-xl">
                    <h2>Wrong Admin Details</h2>
                </div>
            )}
        </div>
    );
}

export default AdminDashboard;
