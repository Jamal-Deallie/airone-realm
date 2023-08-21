import React from 'react';
import styles from '@/styles/components/Video.module.scss';
import cn from 'classnames';

export default function Video({ dimensions = '16/9' }: { dimensions?: string }) {
  return (
    <div
      className={cn(styles['vid'], 'fade-vid')}
      style={{ aspectRatio: dimensions }}>
      <video width='100%' muted={true} autoPlay loop>
        <source src={'/images/test.mp4'} type='video/mp4' />
      </video>
    </div>
  );
}
