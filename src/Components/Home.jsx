import React, { useState } from 'react'
import Menu from './Menu'
import Food from '../assets/Images/Food'

function Home() {
    const [menuOn,setMenuOn] = useState(false)
    return (
        <div>
            <div className='flex justify-between px-10 bg-gray-200'>
                <h1 className='text-orange-400'>Pot-Store</h1>
                <div>
                    <button className='border-none' onClick={()=>setMenuOn(false)}>Home</button>
                    <button className='border-none' onClick={()=>setMenuOn(!menuOn)}>Menu</button>
                </div>
            </div>
            <div>
                {menuOn ? <Menu/> : <Food />}
                
            </div>
        </div>
    )
}

export default Home
