import Head from 'next/head';
import Hero from '@/containers/Hero';
import Intro from '@/containers/Intro';
import CTA from '@/containers/CTA';
import ColorChange from '@/animations/ColorChange';
import Categories from '@/containers/Categories';
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
        <Categories />
        <div className='sections'>
          <Pricing />
        </div>
        <div className='sections'>
          <CTA />
        </div>
      </ColorChange>
    </Layout>
  );
}
