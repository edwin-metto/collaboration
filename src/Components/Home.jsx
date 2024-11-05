import React from 'react'
import Menu from './Menu'

function Home() {
    return (
        <div>
            <div className='flex justify-between px-10 bg-gray-200'>
                <h1 className='text-orange-400'>Pot-Store</h1>
                <div>
                    <button className='border-none'>Home</button>
                    <button className='border-none'>Menu</button>
                    <button className='border-none'>SignIn</button>
                </div>
            </div>
            <div>
                <Menu/>
            </div>
        </div>
    )
}

export default Home
