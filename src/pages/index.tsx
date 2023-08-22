import Head from 'next/head';
import Image from 'next/image';
import Hero from '@/containers/Hero';
import Intro from '@/containers/Intro';
import CTA from '@/containers/CTA';
import ColorChange from '@/animations/ColorChange';
import Services from '@/containers/Services';
import Categories from '@/components/ServiceCategory';
import Layout from '@/components/Layout';
import Pricing from '@/containers/Pricing';

export default function Home() {
  return (
    <Layout>
      <ColorChange>
        <Hero />
        <div className='sections'>
          <Intro />
        </div>
        <div className='sections'>
          <Categories />
        </div>
        <div className='sections'>
          <Categories reverse />
        </div>
        <div className='sections'>
          <Categories />
        </div>
        <Services />
        <div className='sections'>
          <Pricing />
        </div>
        <div>
          <CTA />
        </div>
      </ColorChange>
    </Layout>
  );
}
