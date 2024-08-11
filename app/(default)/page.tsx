export const metadata = {
  title: 'Home - CCFC',
  description: 'Page description',
};

import Hero from '@/components/hero';
import Features from '@/components/features';
import Newsletter from '@/components/newsletter';
import Zigzag from '@/components/zigzag';
import Testimonials from '@/components/testimonials';
import Carousel from '@/components/caurosel';
import Gallery from '@/components/gallery';

export default function Home() {
  return (
    <>
      {/* Caurosel */}
      <Carousel />

      {/* Gallery */}
      <Gallery />
      <Hero />
      <Features />
      {/* <Zigzag /> */}
      <Testimonials />
      <Newsletter />
    </>
  );
}
