import React from 'react'
import { images } from '../assets/Images/Images'


function Menu() {
    const scrollCakes = () => {
        window.scrollTo({
            top: 1300,
            behavior: 'smooth'
        })
    }
    const scrollSalad = () => {
        window.scrollTo({
            top: 10,
            behavior: 'smooth'
        })
    }
    const scrollRolls = () => {
        window.scrollTo({
            top: 900,
            behavior: 'smooth'
        })
    }
    const scrollDessert = () => {
        window.scrollTo({
            top: 1300,
            behavior: 'smooth'
        })
    }
    const scrollNoodle = () => {
        window.scrollTo({
            top: 2500,
            behavior: 'smooth'
        })
    }
    const scrollVegy = () => {
        window.scrollTo({
            top: 2100,
            behavior: 'smooth'
        })
    }
    return (
        <div className='text-black'>
            <div className='flex justify-between px-10 font-bold text-orange-600 flex-wrap'>
                <div className='hover:scale-110 hover:text-green-600 transition ease-out delay-150'>
                    <p>Cakes</p>
                    <img  onClick={()=>scrollCakes()} src={images.CakeLogo} className='h-20 w-20 object-cover border-[4px] rounded-full hover:border-green-500 m-2' />
                </div>
                <div className='hover:scale-110 hover:text-green-600 transition ease-out delay-150'>
                    <p>Salad</p>
                    <img onClick={()=>scrollSalad()} src={images.SaladLogo} className='h-20 w-20 object-cover border-[4px] rounded-full hover:border-orange-500 m-2' />

                </div>
                <div className='hover:scale-110 hover:text-green-600 transition ease-out delay-150'>
                    <p>Rolls</p>
                    <img onClick={()=>scrollRolls()} src={images.RollsLogo} className='h-20 w-20 object-cover border-[4px] rounded-full hover:border-green-500 m-2' />

                </div>
                <div className='hover:scale-110 hover:text-green-600 transition ease-out delay-150'>
                    <p>Dessert</p>
                    <img onClick={()=>scrollDessert()} src={images.DessertLogo} className='h-20 w-20 object-cover border-[4px] rounded-full hover:border-orange-500 m-2' />

                </div>
                <div className='hover:scale-110 hover:text-green-600 transition ease-out delay-150'>
                    <p>Noodle</p>
                    <img onClick={()=>scrollNoodle()} src={images.NoodleLogo} className='h-20 w-20 object-cover border-[4px] rounded-full hover:border-green-500 m-2' />

                </div>
                <div className='hover:scale-110 hover:text-green-600 transition ease-out delay-150'>
                    <p>Vegetable</p>
                    <img onClick={()=>scrollVegy()} src={images.VegyLogo} className='h-20 w-20 object-cover border-[4px] rounded-full hover:border-orange-500 m-2' />

                </div>
            </div>
        
        </div>
    )
}


export default Menu
