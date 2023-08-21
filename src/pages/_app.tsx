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



if (typeof window !== 'undefined') {
  // reset scroll position
  window.scrollTo(0, 0);
  window.history.scrollRestoration = 'manual';

  gsap.defaults({ ease: 'none' });
  gsap.registerPlugin(ScrollTrigger, SplitText);
  //@ts-ignore
  ScrollTrigger.clearScrollMemory('manual');
  ScrollTrigger.defaults({ markers: process.env.NODE_ENV === 'development' });

  // merge rafs
  gsap.ticker.lagSmoothing(0);
  gsap.ticker.remove(gsap.updateRoot);
  Tempus?.add((time: number) => {
    gsap.updateRoot(time / 1000);
  }, 0);
}

export default function App({ Component, pageProps }: AppProps) {
  const lenis = useLenis(ScrollTrigger.update);
  useEffect(ScrollTrigger.refresh, [lenis]);

  return (
    // <div className={`${inter.variable} ${myFont.variable} }`}>

      <Component {...pageProps} />

    // </div>
  );
}
