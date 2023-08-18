import Head from 'next/head';
import Image from 'next/image';
import Hero from '@/containers/Hero';
import Intro from '@/containers/Intro';
import Clients from '@/containers/Clients';
import ColorChange from '@/animations/ColorChange';

export default function Home() {
  return (
    <ColorChange>
      <Hero />
      <div className='sections'>
        <Intro />
      </div>
      <div className='sections'>
        <Clients />
      </div>
    </ColorChange>
  );
}
