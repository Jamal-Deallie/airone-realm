import React from 'react';
import styles from '@/styles/containers/Hero.module.scss';
import cn from 'classnames';
import Image from 'next/image';
type Props = {};

export default function Hero({}: Props) {
  return (
    <div className={cn(styles['hero'], 'primary-bg' )}>
      <div className='main-cont pt-lg-180 pt-sm-120'>
        <div className={cn(styles['title'], 'm-lg-auto')}>
          <h1 className='tac title-lg'>Creative Ideas out of this world</h1>
        </div>
      </div>

      <div className={cn(styles['cloud-l'], 'cloud-left')}>
        <Image
          src={
            'https://res.cloudinary.com/dtwk4dm3g/image/upload/v1681938278/air_one/cloud-four_xxr2nj.webp'
          }
          alt='cloud'
          fill
          sizes='(max-width: 768px) 100vw)'
          priority
        />
      </div>
      <div className={cn(styles['cloud-r'], 'cloud-right')}>
        <Image
          src={
            'https://res.cloudinary.com/dtwk4dm3g/image/upload/v1681938278/air_one/cloud-zero_waixi6.webp'
          }
          alt='cloud'
          fill
          sizes='(max-width: 768px) 100vw)'
          priority
        />
      </div>
    </div>
  );
}
