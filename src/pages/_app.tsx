import '@/styles/base/globals.scss';
import { useEffect } from 'react';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useLenis } from '@studio-freight/react-lenis';
import type { AppProps } from 'next/app';
import SplitText from 'gsap/dist/SplitText';
import gsap from 'gsap';
//@ts-ignore
import Tempus from '@studio-freight/tempus';

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
  const lenis = useLenis(ScrollTrigger.update);
  useEffect(ScrollTrigger.refresh, [lenis]);

  return <Component {...pageProps} />;
}
