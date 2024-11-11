import React, { useState } from 'react';
import { images } from '../assets/Images/Images';

function OrderHistory() {
    const [count, setCount] = useState(1);
    const [orderHistory, setOrderHistory] = useState([]);

    const handleAddOrder = () => {
        const newOrder = (
            <div key={count} className='border-white border-[2px] flex justify-between m-3'>
                <img src={images.pack} alt='Order' className='h-20 w-20' />
                <h2>Date: 11/11/2024</h2>
                <h2>Order made</h2>
                <div className='flex'>
                    <h2>Status: </h2>
                    <h2 className='px-2 bg-red-300 mx-2'>Processing</h2>
                </div>
            </div>
        );
        setOrderHistory([...orderHistory, newOrder]);
        setCount(count + 1);
    };
    return (
        <div className='h-full m-10 text-slate-800 text-[20px]' >
            <button onClick={handleAddOrder} className='px-4 py-2 bg-blue-500 text-white rounded'>
                Add Order
            </button>
            
            <div className='p-5 h-full'>
                {orderHistory}
            </div>
        </div>
    );
}


export default OrderHistory;
