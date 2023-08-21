import React from 'react';
import Image from 'next/image';
import styles from '@/styles/containers/Categories.module.scss';
import cn from 'classnames';

export default function Categories({
  reverse = false,
  src,
  title,
  desc,
}: {
  reverse?: boolean;
  src?: string;
  title?: string;
  desc?: string;
}) {
  return (
    <div
      className={cn(
        'pb-lg-128 pb-sm-64 main',
        reverse ? styles['cat-reverse'] : styles['cat']
      )}>
      <div className='grid-inner'>
        <div className={cn(styles['desc'], 'pt-lg-180')}>
          <h1 className='title-lg'>Healthy</h1>
          <p className='txt-md pt-lg-96 pt-sm-32'>
            Sodales ut eu sem integer vitae justo eget magna fermentum iaculis
            eu non diam phasellus vestibulum lorem sed risus ultricies tristique
            nulla aliquet enim tortor at auctor urna nunc id cursus metus
            aliquam eleifend mi in nulla posuere sollicitudin aliquam ultrices
            sagittis orci a scelerisque purus semper eget duis at tellus at urna
            condimentum mattis pellentesque id nibh tortor id
          </p>
        </div>
        <aside className={styles['img']}>
          <Image
            src='/images/cat.webp'
            alt='Hero'
            fill
            quality={90}
            sizes='(min-width: 850px) 75vw, 100vw, (max-width: 849px) 33vw'
          />
        </aside>
      </div>
    </div>
  );
}
