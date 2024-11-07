import React from 'react'


function Carts() {
    return (
        <div className='text-black flex flex-wrap'>
            <div className='bg-gray-100 flex  justify-center p-5 w-[400px] rounded-xl'>
                <form action="" className=''>
                    <h2 className='font-bold m-2 text-[18px]'>Pay with card</h2>
                    <h2>Email</h2>
                    <input type="email" placeholder='Email' className='p-1 text-center text-black bg-white rounded-2xl w-[300px] m-2' />
                    <h2>Card number</h2>
                    <input type="number" placeholder='1234 1234 1234' className='p-1 text-center text-black bg-white rounded-2xl w-[300px] m-2' />
                    <h2>Cardholder name</h2>
                    <input type="text" placeholder='Equity/VISA' className='p-1 text-center text-black bg-white rounded-2xl w-[300px] m-2' />
                    <h2>Country/Region</h2>
                    <input type="text" placeholder='Nairobi/...' className='p-1 text-center text-black bg-white rounded-2xl w-[300px] m-2' />
                    <br />
                    <button className=' w-[200px] p-1 border-none rounded-l bg-blue-500 hover:bg-blue-600 hover:text-white'>Pay</button>
                </form>

            </div>
        </div>
    )
}

export default Carts