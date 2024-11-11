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



    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setAdminCredentials(prevState => ({ ...prevState, [name]: value }));
    };

    return (
        <div className="bg-gray-50 min-h-screen py-10 px-5">
            <div className="max-w-4xl mx-auto p-5 bg-white shadow-xl rounded-xl">
                {admined ? (
                    <div>
                        <h1>Admin Dashboard</h1>
                        <h1 className='text-black'> Orders Made: {countFromLocalStorage}</h1>
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