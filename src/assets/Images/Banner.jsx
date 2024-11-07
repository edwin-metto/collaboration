import React from 'react';
import { images } from './Images';

const Banner = () => {
  return (
    <div className="relative w-full h-72  md:h-[500px] bg-gray-800 rounded-3xl overflow-hidden">
      <img
        src={images.Banner}
        alt="Delivery App Banner"
        className="w-full h-full object-cover opacity-70"
      />
      <div className="absolute inset-0 flex flex-wrap items-center justify-center">
        <div>
          <h1 className="text-4xl text-white font-bold">Fast and Reliable Delivery</h1>
          <p className='text-[25px] bg-gray-900 bg-opacity-50 p-3'>Welcome to Pot-Store ,your ultimate destination for quick ,easy ,and delicious food delivery!</p>

        </div>
      </div>

    </div>
  );
};

export default Banner;