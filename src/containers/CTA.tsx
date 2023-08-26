import { useRef } from 'react';
import { LinkButton } from '@/components/Button/LinkButton';
import styles from '@/styles/containers/CTA.module.scss';
import cn from 'classnames';
import { useIsomorphicLayoutEffect } from '@/hooks/useIsomorphicLayout';
import gsap from 'gsap';
import SplitText from 'gsap/dist/SplitText';
export default function CTA() {
  const root = useRef<HTMLDivElement>(null!);
  const tl = useRef<gsap.core.Timeline>(null!);

  useIsomorphicLayoutEffect(() => {
    const mm = gsap.matchMedia(root);
    const fadeTargets = gsap.utils.toArray('.fade');
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
          fadeTargets,
          {
            opacity: 0,
            y: 50,
            duration: 1,
            ease: 'expo.out',
            stagger: 0.25,
          },
          '-=1.25'
        );
    });

    return () => {
      mm.revert();
    };
  }, []);

  return (
    <div className='grid-inner py-lg-128 py-sm-64 main' ref={root}>
      <div className={styles['title']}>
        <h1 className='title-lg tac'>GET STARTED TODAY</h1>
      </div>

      <div className={styles['desc']}>
        <p className='tac txt-md fade'>
          Discover your inner radiance with a Refresh Studio Membership! Elevate
          your well-being through unlimited yoga classes, expert guidance, and a
          supportive community. Embrace balance and vitality. Join today and
          embark on a journey to a healthier, happier you!
        </p>
      </div>
      <div className={cn(styles['btn-cont'], 'pb-lg-128 pb-sm-64 fade')}>
        <LinkButton
          href='/'
          size='lg'
          variant='secondary'
          classes='mt-lg-64 mt-sm-32'>
          Join Now
        </LinkButton>
      </div>
    </div>
  );
}
