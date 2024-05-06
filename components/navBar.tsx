'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { useState } from 'react';
// import MenuIcon from '@mui/icons-material/Menu';
// import CloseIcon from '@mui/icons-material/Close';
import Image from 'next/image';

const NavBar = () => {
  const Links = [
    { name: 'Home', link: '/' },
    { name: 'About', link: '/service' },
    { name: 'Matches', link: '/about' },
  ];
  const pathname = usePathname();

  let [open, setOpen] = useState(false);
  return (
    <nav>
      <div className=' md:relative md:w-full md:flex md:items-center md:px-8'>
        <div className=' md:w-1/3'>
          <Image
            src='/ccfc.png'
            width={80}
            height={65}
            alt='Catholic Cadet Football Club (CCFC)'
          />
        </div>

        <div
          onClick={() => setOpen(!open)}
          className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
          {open ? (
            <Image
              src='/close.svg'
              alt='close'
              width={20}
              height={20}
              className='object-contain'
            />
          ) : (
            <Image
              src='/menu.svg'
              alt='menu'
              width={20}
              height={20}
              className='object-contain'
            />
          )}
        </div>

        <ul className=' hidden md:flex font-mono text-lg'>
          {Links.map((link) => (
            <li
              key={link.name}
              className={`link md:ml-16 ${
                pathname === link.link ? 'active' : ''
              }`}>
              <Link
                href={link.link}
                className='text-gray-800 transition transforms hover:text-gray-400 duration-500 hover:translate-y-1'>
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
