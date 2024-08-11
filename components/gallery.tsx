import React from 'react';
import ImageCard from '@/components/ImageCard';
import pope_francis from '@/public/images/pope_francis.jpg';
import rev_kaigama from '@/public/images/rev_kaigama.jpg';
import bishop_umoren from '@/public/images/bishop_umoren.jpg';
import john_cardinal from '@/public/images/john_cardinal.jpeg';
import fr_damina from '@/public/images/fr_damina.jpg';

const Gallery: React.FC = () => {
  const founders = [
    {
      title: 'His Holiness',
      name: 'Pope Francis',
      description: 'Supreme Pontiff',
      imageUrl: pope_francis,
      animation: 'fade-up',
    },
    {
      title: 'His Grace',
      name: 'Most Rev. Dr. Ignatius Agau Kaigama',
      description: 'Archbishop of Abuja',
      imageUrl: rev_kaigama,
      animation: 'zoom-in-up',
    },
    {
      title: 'His Lordship',
      name: 'Most Rev. Dr. Anselm Umoren, MSP',
      description: 'Axuiliary Bishop and Vicar General of Abuja',
      imageUrl: bishop_umoren,
      animation: 'fade-down',
    },
    {
      title: 'His Eminence',
      name: 'John Cardinal Onaiyekan, CON',
      description: 'Emeritus Archbishop of Abuja',
      imageUrl: john_cardinal,
      animation: 'zoom-in-down',
    },
    {
      name: 'Rev. Fr. Christopher Damina',
      description: 'Chairman 4th General Assembly Planning Committee',
      imageUrl: fr_damina,
      animation: 'flip-up',
    },
  ];

  return (
    <div className='container mx-auto p-4 flex flex-col items-center'>
      <h1 className='inline-block text-lg font-bold mb-4 bg-green-200 text-white p-2 font-inter'>
        The Founding Fathers
      </h1>
      <div
        className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'
        data-aos='zoom-in-left'
        data-aos-id-blocks>
        {founders.map((founder, index) => (
          <ImageCard
            key={founder.name}
            title={founder.title}
            name={founder.name}
            description={founder.description}
            imageUrl={founder.imageUrl}
            aos={founder.animation}
            aosDelay={index * 300} // Stagger the animation by index
          />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
