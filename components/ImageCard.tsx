import Image, { StaticImageData } from 'next/image';

interface ImageCardProps {
  title?: string;
  name: string;
  description: string;
  imageUrl: StaticImageData;
  aos?: string;
  aosDelay?: number;
}

const ImageCard: React.FC<ImageCardProps> = ({
  title,
  name,
  description,
  imageUrl,
  aos = 'fade-up',
  aosDelay = 0,
}) => {
  return (
    <div
      className='max-w-xs md:max-w-sm rounded-lg overflow-hidden shadow-xl'
      data-aos={aos}
      data-aos-delay={aosDelay}>
      <div className='relative w-full h-72'>
        <Image
          key={name}
          className='object-cover object-center'
          src={imageUrl}
          alt={name}
          layout='fill'
          objectFit='cover'
          objectPosition='top'
          sizes='(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw'
        />
      </div>
      <div className='flex flex-col items-center px-6 py-4'>
        {title && (
          <span className='font-architects-daughter text-sm md:text-base font-bold'>
            {title}
          </span>
        )}
        <div className='font-bold text-sm md:text-base'>{name}</div>
        <p className='text-red text-xs md:text-sm tracking-tighter text-center font-bold'>
          {description}
        </p>
      </div>
    </div>
  );
};

export default ImageCard;
