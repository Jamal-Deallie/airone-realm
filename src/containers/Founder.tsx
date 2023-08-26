import React from 'react';
import Image from 'next/image';
import cn from 'classnames';
import styles from '@/styles/containers/Founder.module.scss';

export default function Founder() {
  return (
    <div className='py-lg-128 py-sm-64'>
      <div className='grid-inner'>
        <div className={styles['title']}>
          <h1 className='title-lg tac'>A Sanctuary For Personal Growth</h1>
        </div>
        <div className={styles['image']}>
          <Image
            alt='Refresh Studios Founder'
            src='/images/founder.jpg'
            fill
            sizes='(min-width: 850px) 75vw, 100vw, (max-width: 849px) 33vw'
          />
        </div>
        <div className={cn(styles['image'], 'mt-lg-128')}>
          <Image
            alt='Refresh Studios Founder'
            src='/images/founder-2.jpg'
            fill
            sizes='(min-width: 850px) 75vw, 100vw, (max-width: 849px) 33vw'
          />
        </div>
        <div className={styles['image']}>
          <Image
            alt='Refresh Studios Founder'
            src='/images/founder-3.jpg'
            fill
            sizes='(min-width: 850px) 75vw, 100vw, (max-width: 849px) 33vw'
          />
        </div>
        <div className={styles['desc']}>
          <p className='txt-md mt-lg-64'>
            Hello, I'm [Founder's Name], the visionary behind Refresh Studios.
            My journey in holistic wellness led me to create this haven where
            individuals explore the synergy of mind and body. With a background
            in [relevant experience], I am passionate about fostering well-being
            through yoga, meditation, and community. My mission is to guide you
            towards balance, empowerment, and self-discovery. By blending
            tradition with innovation, Refresh Studios offers a diverse range of
            classes that cater to every individual's journey. Join me in
            embracing a life of vitality, connection, and transformation.
            Together, let's cultivate a space where wellness becomes a way of
            life
          </p>
        </div>
      </div>
    </div>
  );
}
