import './css/style.css';

import { Inter, Architects_Daughter } from 'next/font/google';

import Header from '@/components/ui/header';
import Footer from '@/components/ui/footer';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const architects_daughter = Architects_Daughter({
  subsets: ['latin'],
  variable: '--font-architects-daughter',
  weight: '400',
  display: 'swap',
});

export const metadata = {
  title: 'Catholic Cadet Football Club (CCFC)',
  description:
    'The vision of the CCFC is to develop football and education at the grassroots',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body
        className={`${inter.variable} ${architects_daughter.variable} font-inter antialiased text-gray-600 tracking-tight`}>
        <div className='flex flex-col min-h-screen overflow-hidden'>
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}