import React from 'react';
import styles from '@/styles/containers/Clients.module.scss';
import MarqueeText from '@/animations/MarqueeText';
import { clientList } from '@/data';
import Image from 'next/image';
import cn from 'classnames';

export interface ClientList {
  id: number;
  client: string;
}

export default function Clients() {
  const clients: ClientList[] = clientList;
  return (
    <div className='pt-lg-128 pb-lg-180 py-sm-64'>
      <div className='grid-inner mb-lg-128 mb-sm-64'>
        <h1 className='title-lg'>Clients</h1>
      </div>
      <MarqueeText reverse={true} speed={0.1}>
        <div className={styles['text-marquee']}>
          <div className={cn(styles['text-single'], 'txt-wrapper')}>
            {clients.slice(24, 36).map(({ id, client }) => {
              return (
                <div className={cn(styles['text'], 'scroll-txt')} key={id}>
                  <div className={styles['client']}>
                    <h1 className='title-lg'>{client}</h1>
                    <div className={styles['image']}>
                      <Image
                        alt='star'
                        src={
                          'https://res.cloudinary.com/dtwk4dm3g/image/upload/v1676674871/air_one/circle_yk6pxm.svg'
                        }
                        fill
                        sizes='(max-width: 768px) 100vw)'
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </MarqueeText>
    </div>
  );
}
