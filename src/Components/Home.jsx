import React, { useState } from 'react'
import Menu from './Menu'
import Food from '../assets/Images/Food'
import Banner from '../assets/Images/Banner'


function Home() {
    const [menuOn,setMenuOn] = useState(null)
    return (
        <div>
            <div className='flex justify-between px-10 bg-gray-200'>
                <h1 className='text-orange-400'>Pot-Store</h1>
                <div>
                    <button className='border-none' onClick={()=>setMenuOn(false)}>Home</button>
                    <button className='border-none' onClick={()=>setMenuOn(true)}>Menu</button>
                </div>
            </div>
            <div>
                {menuOn === null && <Banner/>}
                {menuOn === true && <Menu/>}
                {menuOn === false && <Food />}
                <button className='border-none absolute bottom-0' onClick={()=>setMenuOn(false)}>Visit our Home Page</button>
            </div>
        </div>
    )
}

export default Home
