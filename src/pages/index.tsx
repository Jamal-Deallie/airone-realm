import Head from 'next/head';
import Image from 'next/image';
import Hero from '@/containers/Hero';
import Intro from '@/containers/Intro';
import Clients from '@/containers/Clients';
import ColorChange from '@/animations/ColorChange';
import Services from '@/containers/Services';
import Categories from '@/components/ServiceCategory';
import Layout from '@/components/Layout';

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
      </ColorChange>
    </Layout>
  );
}
