'use client';

import React, { useEffect, useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled, RxDot } from 'react-icons/rx';
import ccfcImages from '@/public/images/ccfc_images';

function Carousel() {
  //const slides = ccfcImages;
  const image =
    'https://collection.cloudinary.com/damtrix/a164bd1725d7500b4c222f1692aefcf9';
  console.log(image);
  const slides = [
    {
      url: 'https://res.cloudinary.com/damtrix/image/upload/v1722937428/ccfc/ccfc_image_1_ojc3vz.jpg',
    },
    {
      url: 'https://res.cloudinary.com/damtrix/image/upload/v1722937428/ccfc/ccfc_image_2_sette2.jpg',
    },
    {
      url: 'https://res.cloudinary.com/damtrix/image/upload/v1722937428/ccfc/ccfc_image_3_gf08sr.jpg',
    },
    {
      url: 'https://res.cloudinary.com/damtrix/image/upload/v1722937428/ccfc/ccfc_image_4_emcnz1.jpg',
    },
    {
      url: 'https://res.cloudinary.com/damtrix/image/upload/v1722937428/ccfc/ccfc_image_5_fihz9p.jpg',
    },
    {
      url: 'https://res.cloudinary.com/damtrix/image/upload/v1722937428/ccfc/ccfc_image_6_ytrxgn.jpg',
    },
    {
      url: 'https://res.cloudinary.com/damtrix/image/upload/v1722937428/ccfc/ccfc_image_7_wuihg3.jpg',
    },
    {
      url: 'https://res.cloudinary.com/damtrix/image/upload/v1722937429/ccfc/ccfc_image_8_xdmtkq.jpg',
    },
    {
      url: 'https://res.cloudinary.com/damtrix/image/upload/v1722937429/ccfc/ccfc_image_9_qax8dv.jpg',
    },
    {
      url: 'https://res.cloudinary.com/damtrix/image/upload/v1722937429/ccfc/ccfc_image_10_zmfnyi.jpg',
    },
    {
      url: 'https://res.cloudinary.com/damtrix/image/upload/v1722937436/ccfc/ccfc_image_11_ckzuxp.jpg',
    },
    {
      url: 'https://res.cloudinary.com/damtrix/image/upload/v1722937435/ccfc/ccfc_image_12_kibhde.jpg',
    },
    {
      url: 'https://res.cloudinary.com/damtrix/image/upload/v1722937436/ccfc/ccfc_image_13_fzptf6.jpg',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex: number) => {
    setCurrentIndex(slideIndex);
  };

  useEffect(() => {
    const autoplay = () => {
      setAnimating(true);
      setTimeout(() => {
        setAnimating(false);
        const newIndex =
          slides.length - 1 === currentIndex ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
      }, 1000);
    };

    const intervalId = setInterval(autoplay, 3000);

    // Cleanup function to clear the interval
    return () => clearInterval(intervalId);
  }, [currentIndex, slides.length]);

  return (
    <div className='max-w-[400px] h-[400px] md:max-w-[1000px] md:h-[480px] m-auto pb-10 px-6 relative group'>
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className={`w-full h-full rounded-2xl bg-center bg-contain duration-500 ${
          Number(animating) === currentIndex ? 'animate-fadeOut' : ''
        }`}></div>
      {/* Left Arrow */}
      <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-6 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </div>
      {/* Right Arrow */}
      <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-6 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div>
      <div className='flex top-4 justify-center py-2'>
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className='text-2xl cursor-pointer'>
            {currentIndex === slideIndex ? <RxDotFilled /> : <RxDot />}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Carousel;
