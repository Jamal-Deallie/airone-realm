import '@/styles/base/globals.scss';
import type { AppProps } from 'next/app';
import { ReactLenis, useLenis } from '@studio-freight/react-lenis';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
//@ts-ignore
import Tempus from '@studio-freight/tempus';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import SplitText from 'gsap/dist/SplitText';
import Layout from '@/components/Layout';
import { useIsomorphicLayoutEffect } from '@/hooks/useIsomorphicLayout';
import localFont from 'next/font/local';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], variable: '--body-font' });
const myFont = localFont({
  src: [
    {
      path: '../../public/fonts/BoldenVan.ttf',
      weight: '700',
      style: 'italic',
    },
  ],
  variable: '--heading-font',
});

if (typeof window !== 'undefined') {
  // reset scroll position
  window.scrollTo(0, 0);
  window.history.scrollRestoration = 'manual';
  gsap.defaults({ ease: 'none' });
  gsap.registerPlugin(ScrollTrigger, SplitText);
  //@ts-ignore
  ScrollTrigger.clearScrollMemory('manual');
  // merge rafs
  gsap.ticker.lagSmoothing(0);
  gsap.ticker.remove(gsap.updateRoot);
  Tempus?.add((time: number) => {
    gsap.updateRoot(time / 1000);
  }, 0);
}

export default function App({ Component, pageProps }: AppProps) {
  const lenis = useLenis((lenis: any) => lenis);

  useIsomorphicLayoutEffect(() => {
    if (lenis) ScrollTrigger.refresh();
  }, [lenis]);

  useEffect(() => {
    window.history.scrollRestoration = 'manual';
  }, []);

  return (
    <ReactLenis root>
      <div className={`${inter.variable} ${myFont.variable} }`}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </div>
    </ReactLenis>
  );
}
