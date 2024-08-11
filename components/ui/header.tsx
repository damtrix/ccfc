'use client';

import Link from 'next/link';
import MobileMenu from './mobile-menu';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

import Logo from '@/public/images/ccfc.png';

export const link = [
  { path: '/', label: 'Home' },
  { path: '/services', label: 'Services' },
  { path: '/about', label: 'About' },
  { path: '/signup', label: 'Sign up' },
  { path: '/signin', label: 'Sign in' },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className='relative w-full z-30 mb-5'>
      <div className='max-w-6xl mx-auto px-4 sm:px-6'>
        <div className='flex items-center justify-between h-20'>
          {/* Site branding */}
          <div className='shrink-0 mr-4'>
            {/* Logo */}
            <Link
              href='/'
              className='flex flex-col items-center'
              aria-label='CCFC'>
              <Image
                className='rounded-full -mb-4'
                src={Logo}
                width={80}
                height={80}
                alt='CCFC'
              />
              <span className='hidden md:text-base md:block font-architects-daughter md:font-bold text-green-200'>
                Catholic Cadet Football Club (CCFC)
              </span>
            </Link>
          </div>

          {/* Desktop navigation */}
          <nav className='hidden md:flex md:grow'>
            {/* Desktop sign in links */}
            <ul className='flex grow justify-end flex-wrap items-center'>
              {link.map((item) => {
                return (
                  <li key={item.label}>
                    <Link
                      href={item.path}
                      className={`font-medium text-green-100 hover:bg-green-200 hover:text-white px-4 py-3 flex items-center transition duration-150 ease-in-out ml-2 ${
                        pathname === item.path ? 'bg-green-200 text-white' : ''
                      }`}>
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
