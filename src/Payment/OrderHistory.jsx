import React, { useEffect, useState } from 'react';
import { images } from '../assets/Images/Images';

function OrderHistory() {
    const [countFromLocalStorage, setCountFromLocalStorage] = useState(0);
    const [orderHistory, setOrderHistory] = useState([]);

    useEffect(() => {
        const savedCount = localStorage.getItem('count');
        if (savedCount) {
            const count = parseInt(savedCount, 10);
            setCountFromLocalStorage(count);
            generateOrders(count);
        }
    }, []);

    const generateOrders = (count) => {
        const orders = [];
        for (let i = 0; i < count; i++) {
            orders.push(
                <div key={i} className="border-white border-[2px] flex justify-between m-3">
                    <img src={images.pack} alt="Order" className="h-20 w-20" />
                    <h2>Date: 11/11/2024</h2>
                    <h2>Order made</h2>
                    <div className="flex">
                        <h2>Status: </h2>
                        <h2 className="px-2 bg-red-300 mx-2">Processing</h2>
                    </div>
                </div>
            );
        }
        setOrderHistory(orders); 
    };

    return (
        <div className="h-full m-10 text-slate-800 text-[20px]">
            <div> Orders: {countFromLocalStorage} </div>
            <div className="p-5 h-full">
                {orderHistory}
            </div>
        </div>
    );
}

export default OrderHistory;