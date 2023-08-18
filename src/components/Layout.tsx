import React, { ReactNode } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import styles from '@/styles/components/Layout.module.scss';



export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className={styles['layout']}>
      <Navbar />
      <main className={styles['main-wrap']}>{children}</main>
      <Footer />
    </div>
  );
}
