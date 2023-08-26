import React from 'react';
import Image from 'next/image';
import cn from 'classnames';
import styles from '@/styles/containers/Mission.module.scss';
type Props = {};

export default function Mission({}: Props) {
  return (
    <div className='primary-bg py-lg-128 py-sm-64'>
      <div className='grid-inner'>
        <div className={styles['title']}>
          <h1 className='title-lg'>Mindful Movement and Unity</h1>
        </div>
        <div className={styles['image']}>
          <Image
            alt='yoga class'
            src='/images/mission.jpg'
            fill
            sizes='(min-width: 850px) 75vw, 100vw, (max-width: 849px) 33vw'
            priority={true}
          />
        </div>
        <div className={styles['desc']}>
          <p className='txt-md mt-lg-128'>
            At Refresh Studios, our mission is to guide individuals towards
            holistic well-being through mindful movement practices. We cultivate
            a welcoming community that embraces diversity and fosters
            self-discovery. With expert guidance, we promote physical vitality,
            mental clarity, and emotional balance. Our studio is a sanctuary for
            personal growth, where each journey is honored and celebrated on the
            path to wellness.
          </p>
        </div>
      </div>
    </div>
  );
}
