import React, { useRef } from 'react';
import styles from '@/styles/containers/Hero.module.scss';
import cn from 'classnames';
import Image from 'next/image';
import { useIsomorphicLayoutEffect } from '@/hooks/useIsomorphicLayout';
import { gsap } from 'gsap';
import { LinkButton } from '@/components/Button';
import SplitText from 'gsap/dist/SplitText';
type Props = {};

export default function Hero({}: Props) {
  const root = useRef<HTMLDivElement>(null!);
  const tl = useRef<gsap.core.Timeline>(null!);

  useIsomorphicLayoutEffect(() => {
    const mm = gsap.matchMedia(root);

    mm.add('(min-width: 850px)', () => {
      const split = new SplitText('h1', { type: 'chars' });
      gsap.from(split.chars, {
        opacity: 0,
        y: 50,
        duration: 2,
        ease: 'back',
        stagger: 0.05,
      });
    });

    return () => {
      mm.revert();
    };
  }, []);

  return (
    <div className={cn(styles['hero'], 'primary-bg')}>
      <div className='main-cont pt-lg-180 pt-sm-120'>
        <div className={cn(styles['inner'], 'm-lg-auto')} ref={root}>
          <h1 className='tac title-xlg tertiary-clr'>REFRESH</h1>
          <div className={cn(styles['image'], 'center-elem')}>
            <Image
              src='/images/hero.webp'
              alt='Hero'
              fill
              quality={90}
              sizes='(min-width: 850px) 75vw, 100vw, (max-width: 849px) 33vw'
              priority={true}
            />
          </div>
        </div>
        <div className={cn(styles['btn-cont'], 'mx-lg-auto')}>
          <LinkButton href='/' size='xlg' variant='primary'>
            Join Now
          </LinkButton>
        </div>
      </div>
    </div>
  );
}
