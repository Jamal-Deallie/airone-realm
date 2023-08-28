import React, { useRef } from 'react';
import styles from '@/styles/containers/Hero.module.scss';
import cn from 'classnames';
import { useIsomorphicLayoutEffect } from '@/hooks/useIsomorphicLayout';
import { gsap } from 'gsap';
import { LinkButton } from '@/components/Button';
import SplitText from 'gsap/dist/SplitText';
import { LinkProps } from 'next/link';

type Props = {};

export default function Hero({}: Props) {
  const root = useRef<HTMLDivElement>(null!);
  const btn = useRef<HTMLAnchorElement>(null!);
  const tl = useRef<gsap.core.Timeline>(null!);

  useIsomorphicLayoutEffect(() => {
    const mm = gsap.matchMedia(root);

    mm.add('(min-width: 850px)', () => {
      // gsap.set([btn.current, 'span'], { autoAlpha: 0 });
      tl.current = gsap.timeline();
      const split = new SplitText('h1', { type: 'chars' });
      tl.current
        .from('.vid-bg', {
          scale: 0.4,
          duration: 1,
          clipPath: 'polygon(25% 25%, 75% 25%, 75% 75%, 25% 75%)',
          ease: 'power4.in',
        })

        .from(
          split.chars,
          {
            opacity: 0,
            y: 50,
            duration: 2,
            ease: 'back',
            stagger: 0.05,
          },
          '-=.25'
        )
        .to(
          [btn.current],
          { opacity: 1, duration: 2.1, ease: 'circ.out' },
          '-=1'
        );
    });

    return () => {
      mm.revert();
    };
  }, []);

  return (
    <div className={styles['hero']} ref={root}>
      <div className={cn(styles['vid'], 'vid-bg')}>
        <video width='100%' muted={true} autoPlay loop>
          <source src={'/images/hero_refresh.mp4'} type='video/mp4' />
        </video>
      </div>
      <div className='main-cont pt-lg-180 pt-sm-128'>
        <div className={cn(styles['inner'], 'm-lg-auto')} ref={root}>
          <h1 className='tac title-xlg tertiary-clr'>REFRESH</h1>
        </div>
        <div className={cn(styles['btn-cont'], 'mt-lg-24 mt-sm-48')}>
          <LinkButton
            Ref={btn}
            href='/'
            size='xlg'
            variant='primary'
            classes='opacity-none'>
            Join Now
          </LinkButton>
        </div>
      </div>
    </div>
  );
}
