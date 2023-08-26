import { useRef } from 'react';
import PricingCard from '@/components/PricingCard';
import { Button } from '@/components/Button';
import cn from 'classnames';
import styles from '@/styles/containers/Pricing.module.scss';
import { useIsomorphicLayoutEffect } from '@/hooks/useIsomorphicLayout';
import gsap from 'gsap';
import SplitText from 'gsap/dist/SplitText';

export default function Pricing() {
  const root = useRef<HTMLDivElement>(null!);
  const tl = useRef<gsap.core.Timeline>(null!);

  useIsomorphicLayoutEffect(() => {
    const mm = gsap.matchMedia(root);

    mm.add('(min-width: 800px)', () => {
      tl.current = gsap.timeline({
        scrollTrigger: {
          start: 'top 25%',
          end: 'bottom bottom',
          trigger: root.current,
        },
      });

      const split = new SplitText('.title-lg', { type: 'words' });
      tl.current
        .from(split.words, {
          opacity: 0,
          y: 50,
          duration: 1.25,
          ease: 'back',
          stagger: 0.25,
        })
        .from(
          '.price',
          {
            opacity: 0,
            y: 50,
            duration: 1,
            ease: 'expo.out',
            stagger: 0.25,
          },
          '-=1.75'
        );
    });

    return () => {
      mm.revert();
    };
  }, []);

  return (
    <div
      className={cn('py-lg-128 py-sm-64 main', styles['pricing'])}
      ref={root}>
      <div className='grid-inner'>
        <div className={cn(styles['title'], 'mb-lg-64')}>
          <h1 className='title-lg tac'>CLASS PRICING</h1>
        </div>
        <PricingCard />
        <PricingCard />
        <PricingCard />
      </div>
    </div>
  );
}
