'use client';

import React from 'react';
import { CardDefault, CustomButton } from '@/components';

const Hero = () => {
  const handleScroll = () => {};
  return (
    <div className=' absolute bg-hero-bg -z-10 w-full bg-no-repeat bg-center bg-cover h-[580px]'>
      <div className=' h-full backdrop-blur-sm flex p-7'>
        <div className=' flex-1 pt-36 w-1/2'>
          <h1 className=' text-4xl text-white font-extrabold font-mono mb-3'>
            Catholic Cadet Football Club
          </h1>
          <p className=' text-2xl font-dancing'>
            The vision of the CCFC is to develop football and education at the
            grassroots
          </p>
        </div>

        <div className=' grid grid-cols-2 gap-2'>
          <CardDefault /> <CardDefault /> <CardDefault /> <CardDefault />
        </div>
      </div>
    </div>
  );
};

export default Hero;
