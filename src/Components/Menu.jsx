import React from 'react'
import { images } from '../assets/Images/Images'

function Menu() {
    return (
        <div className='text-black p-5'>
            <div className='flex justify-center p-3'>
                <p className='font-bold text-[20px]'>MENU</p>
            </div>
            <div className='flex justify-center p-3 text-[18px]'>
                <p className=''>Select a meal of choice from the choices below </p>
            </div>
            
            <div className='flex justify-between px-10 font-bold text-orange-600 flex-wrap'>
                <div className='hover:scale-110 hover:text-green-600 transition ease-out delay-150'>
                    <p>Cakes</p>
                    <img src={images.CakeLogo} className='h-20 w-20 object-cover border-[4px] rounded-full hover:border-green-500 m-2' />
                </div>
                <div className='hover:scale-110 hover:text-green-600 transition ease-out delay-150'>
                    <p>Salad</p>
                    <img src={images.SaladLogo} className='h-20 w-20 object-cover border-[4px] rounded-full hover:border-orange-500 m-2' />

                </div>
                <div className='hover:scale-110 hover:text-green-600 transition ease-out delay-150'>
                    <p>Rolls</p>
                    <img src={images.RollsLogo} className='h-20 w-20 object-cover border-[4px] rounded-full hover:border-green-500 m-2' />

                </div>
                <div className='hover:scale-110 hover:text-green-600 transition ease-out delay-150'>
                    <p>Dessert</p>
                    <img src={images.DessertLogo} className='h-20 w-20 object-cover border-[4px] rounded-full hover:border-orange-500 m-2' />
           
                </div>
                <div className='hover:scale-110 hover:text-green-600 transition ease-out delay-150'>
                    <p>Noodle</p>
                    <img src={images.NoodleLogo} className='h-20 w-20 object-cover border-[4px] rounded-full hover:border-green-500 m-2' />

                </div>
                <div className='hover:scale-110 hover:text-green-600 transition ease-out delay-150'>
                    <p>Vegetable</p>
                    <img src={images.VegyLogo} className='h-20 w-20 object-cover border-[4px] rounded-full hover:border-orange-500 m-2' />

                </div>
            </div>
        </div>
    )
}


export default Menu
