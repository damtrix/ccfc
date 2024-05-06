import type { Metadata } from 'next';
import { Inter, Roboto_Mono, Dancing_Script, Oswald } from 'next/font/google';
import './globals.css';
import { NavBar } from '@/components';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const roboto_mono = Roboto_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto-mono',
});

const dancing_script = Dancing_Script({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-dancing-script',
});

const oswald = Oswald({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-oswald',
});

export const metadata: Metadata = {
  title: 'CCFC',
  description: 'Catholic Cadet Football Club',
  // icons: {
  //   icon: [
  //     {
  //       url: '/ccfc.png', // /public path
  //       href: '/ccfc.png', // /public path
  //     },
  //   ],
  // },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={`${inter.variable} ${roboto_mono.variable} ${dancing_script.variable} ${oswald.variable}`}>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
