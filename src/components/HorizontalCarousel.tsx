import { gsap } from 'gsap';
import { horizontalLoop } from '@/helpers/horizontalLoop';
import { MutableRefObject, useEffect, useLayoutEffect, useRef } from 'react';
import SplitText from 'gsap/dist/SplitText';
import cn from 'classnames';
import { useIsomorphicLayoutEffect } from '@/hooks/useIsomorphicLayout';
import styles from '@/styles/components/HorizontalCarousel.module.scss';
import Image from 'next/image';
import { slides } from '@/data';

export default function Home() {
  const main = useRef<HTMLDivElement>(null!);
  const boxes = useRef<HTMLDivElement>(null!);
  const loop = useRef<GSAPTimeline>(null!);
  const tl = useRef<gsap.core.Timeline>(null!);
  const activeElement = useRef<HTMLDivElement>(null!);

  const nextBtnHandler = () => {
    loop.current.next({ duration: 0.4, ease: 'power1.inOut' });
  };
  const prevBtnHandler = () => {
    loop.current.previous({ duration: 0.4, ease: 'power1.inOut' });
  };

  useIsomorphicLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const boxes = gsap.utils.toArray('.target');

      loop.current = horizontalLoop(boxes, {
        paused: true,
        draggable: true,
        center: true,
        onChange: (element: HTMLDivElement, index: number) => {
          // when the active element changes, this function gets called.

          activeElement.current &&
            activeElement.current.classList.remove('active');
          element.classList.add('active');
          activeElement.current = element;
        },
      });
    }, main);
    return () => ctx.revert();
  }, []);

  return (
    <div className='primary-bg pt-nav-height'>
      <div ref={main} className='main-cont pt-lg-64 pb-lg-128'>
        <div>
          <h1 className='title-lg pb-lg-64'>Elevate Your Experience</h1>
        </div>
        <div className={styles['app']}>
          <div className={styles['wrapper']}>
            {slides.map(el => (
              <div key={el.id} className={cn(styles['box'], 'target')}>
                <div className={styles['image']}>
                  <Image
                    alt={el.alt}
                    src={el.src}
                    fill
                    sizes='(min-width: 850px) 75vw, 100vw, (max-width: 849px) 33vw'
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className={cn(styles['btn-cont'], 'mt-lg-48')}>
          <button className={styles['prev']} onClick={prevBtnHandler}>
            prev
          </button>
          <button className={styles['next']} onClick={nextBtnHandler}>
            next
          </button>
        </div>
      </div>
    </div>
  );
}
