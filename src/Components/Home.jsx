import React, { useState } from 'react'
import Menu from './Menu'
import Food from '../assets/Images/Food'
import Banner from '../assets/Images/Banner'

export const Context = React.createContext();

function Home() {
    const [menuOn, setMenuOn] = useState(null);
    const [showOrder, setShowOrder] = useState(false);
    return (
        <Context.Provider value={[showOrder, setShowOrder]}>
            <div>
                {!showOrder ? (
                    <div className='flex justify-between px-10 bg-gray-200'>
                        <h1 className='text-orange-400'>Pot-Store</h1>
                        <div>
                            <button className='border-none' onClick={() => setMenuOn(false)}>Home</button>
                            <button className='border-none' onClick={() => setMenuOn(!menuOn)}>Menu</button>
                        </div>
                    </div>
                ) : ''}


                <div>
                    {menuOn === null && <Banner />}
                    {!showOrder ? ( <div className='sticky top-0 z-99'>
                        
                    {menuOn === true ? (<div className=' bg-gray-200'><Menu /></div>) : ( <div><Food /></div> )}
                    </div> ) : ''}
                    <Food />
                    {menuOn === null ? (
                        <button className='border-none absolute bottom-0' onClick={() => setMenuOn(false)}>Visit our Home Page</button>) : ''}
                </div>
            </div>
        </Context.Provider>
    )
}

export default Home
