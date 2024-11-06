import React from 'react';
import { images } from './Images';

const Banner = () => {
  return (
    <div className="relative w-full h-64 bg-gray-800">
      <img
        src={images.Banner} 
        alt="Delivery App Banner"
        className="w-full h-full object-cover opacity-70"
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <h1 className="text-4xl text-white font-bold">Fast and Reliable Delivery</h1>
      </div>
    </div>  
  );
};

export default Banner;