import React, { ReactNode, useEffect } from 'react';
import Footer from '@/components/Footer';
import styles from '@/styles/components/Layout.module.scss';
import dynamic from 'next/dynamic';
import localFont from 'next/font/local';
import { Inter } from 'next/font/google';
import cn from 'classnames';
import Router from 'next/router';
import { Lenis, useLenis } from '@studio-freight/react-lenis';

const inter = Inter({ subsets: ['latin'], variable: '--body-font' });
const rockets = localFont({
  src: [
    {
      path: '../../public/fonts/Rockets.ttf',
      weight: '900',
      style: 'normal',
    },
  ],
  variable: '--heading-font',
});
const DynamicNavbar = dynamic(() => import('@/components/Navbars'), {
  ssr: false,
});

export default function Layout({ children }: { children: ReactNode }) {
  const lenis = useLenis();

  useEffect(() => {
    function onHashChangeStart(url: string) {
      url = '#' + url.split('#').pop();
      lenis.scrollTo(url);
    }
    Router.events.on('hashChangeStart', onHashChangeStart);
    return () => {
      Router.events.off('hashChangeStart', onHashChangeStart);
    };
  }, [lenis]);

  return (
    <Lenis root>
      <div className={cn(styles['layout'], inter.variable, rockets.variable)}>
        <DynamicNavbar />
        <main className={styles['main-wrap']}>{children}</main>
        <Footer />
      </div>
    </Lenis>
  );
}
