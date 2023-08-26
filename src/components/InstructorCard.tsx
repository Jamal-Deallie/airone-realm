import { useRef } from 'react';
import { useIsomorphicLayoutEffect } from '@/hooks/useIsomorphicLayout';
import gsap from 'gsap';
import styles from '@/styles/components/TeamCard.module.scss';
import Image from 'next/image';
import cn from 'classnames';
import Twitter from '@/svgs/Twitter';
import LinkedIn from '@/svgs/LinkedIn';

export default function TeamCard({
  name,
  title,
  position,
  bio,
}: {
  name: string;
  title: string;
  position: string;
  bio: string;
}) {
  const overlay = useRef(null!);
  const root = useRef(null!);
  const text = useRef(null!);
  const info = useRef(null!);

  useIsomorphicLayoutEffect(() => {
    gsap.set(text.current, { opacity: 0, yPercent: 20 });
    gsap.set(overlay.current, {
      clipPath: 'polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)',
      opacity: 0,
    });
    gsap.set(info.current, { color: '#000' });
  }, [text, overlay, info]);

  const onEnter = () => {
    gsap.to(overlay.current, {
      clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
      opacity: 1,
    });
    gsap.to(text.current, { opacity: 1 });
    gsap.to(info.current, { color: '#fffcf8' });
  };

  const onLeave = () => {
    gsap.to(overlay.current, {
      clipPath: 'polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)',
      opacity: 0,
    });
    gsap.to(text.current, { opacity: 0 });
    gsap.to(info.current, { color: '#000' });
  };
  return (
    <div className={styles['card']}>
      <div
        className={styles['team-card']}
        onMouseEnter={onEnter}
        onMouseLeave={onLeave}
        ref={root}>
        <div className={styles['inner']}>
          <div
            ref={overlay}
            className={cn(styles['overlay'], 'secondary-bg p-lg-24 p-sm-16')}>
            <div ref={text}>
              <div className={styles['icons']}>
                <span>
                  <Twitter />
                </span>
                <span>
                  <LinkedIn />
                </span>
              </div>
              <div className='mt-lg-64'>
                <p className='primary-clr txt'>{`"${bio}"`}</p>
              </div>
            </div>
          </div>
          <div className={styles['image']}>
            <Image
              src='/images/team.jpg'
              alt='team name'
              fill
              quality={100}
              sizes='(max-width: 1300px) 75vw, 100vw, (max-width: 800px) 100vw'
              priority
            />
          </div>
          <div
            className={cn(styles['team-info'], 'mt-lg-8 mt-sm-16')}
            ref={info}>
            <div className='pb-lg-24 pl-lg-16 txt'>
              <p className='pt-lg-4 txt'>{name}</p>
              <p>{title}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
