import { gsap } from 'gsap';
import { horizontalLoop } from '@/helpers/horizontalLoop';
import {
  MutableRefObject,
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
} from 'react';
import SplitText from 'gsap/dist/SplitText';
import cn from 'classnames';
import { useIsomorphicLayoutEffect } from '@/hooks/useIsomorphicLayout';
import styles from '@/styles/components/HorizontalCarousel.module.scss';
import Image from 'next/image';
import { slides } from '@/data';
import { Button } from '@/components/Button';

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
        // onChange: (element: HTMLDivElement, index: number) => {
        //   // when the active element changes, this function gets called.

        //   activeElement.current &&
        //     activeElement.current.classList.remove('active');
        //   element.classList.add('active');
        //   activeElement.current = element;
        // },
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
                    priority={el.id === 1 ? true : false}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className={cn(styles['btn-cont'], 'mt-lg-32 mx-lg-auto')}>
          <Button onClick={prevBtnHandler} variant='secondary' size='md'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
              className='lucide lucide-move-left'>
              <path d='M6 8L2 12L6 16' />
              <path d='M2 12H22' />
            </svg>
          </Button>
          <Button onClick={nextBtnHandler} variant='secondary' size='md'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
              className='lucide lucide-move-right'>
              <path d='M18 8L22 12L18 16' />
              <path d='M2 12H22' />
            </svg>
          </Button>
        </div>
        <div className='mt-lg-32'>
          <p className='txt-md'>
            Refresh Studios offers an array of exceptional amenities and an
            inviting yoga space. Equipped with premium yoga props, our spacious
            studio fosters a comfortable practice environment. Unwind in our
            relaxation area after class, and enjoy the convenience of a
            hydration station. Experience holistic well-being with our
            thoughtfully curated facilities, designed to support your wellness
            journey from mat to mindfulness.
          </p>
        </div>
      </div>
      <div className='grid-block'>
        <div className={cn(styles['amenity'], 'py-lg-64 px-lg-48')}>
          <div className={styles['svg-cont-1']}>
            <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 73.1'>
              <path
                d='M22 25.7v2h2v8.2h-2v2.3h2v8.2h-2v1.9h2v8.2h-2v2.3h2v10.3c0 2.2-1.8 4-4 4H4c-2.2 0-4-1.8-4-4V58.7h2v-2.3H0v-8.2h2v-1.9H0v-8.2h2v-2.3H0v-8.2h2v-2H0v-11L5.7 9h12.1l6.1 5.6v11.1H22ZM17.8 0h-12v6.6h12V0Z'
                style={{
                  fill: '#000',
                }}
              />
            </svg>
          </div>
          <div>
          <h2 className='title-sm my-lg-24'>Hydration Station</h2>
          </div>
          <div>
            <p className='txt-md'>Revitalize post-practice at Refresh Studios' Hydration Station. Enjoy refreshing water and invigorating herbal teas, thoughtfully provided to nourish your body and soul. Stay hydrated, rejuvenated, and ready to embrace the day.</p>
          </div>
        </div>
        <div className={cn(styles['amenity'], 'py-lg-64 px-lg-48')}>
          <div className={styles['svg-cont-2']}>
            <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64.7 69.8'>
              <path
                d='M9.85 62.8V65h45v-2.2h-45Zm0 4v3h45v-3h-45Zm52.9-32.4-.1-.1L33.85 19v-2.4c3.9-.7 6.9-4.1 6.9-8.2 0-4.6-3.8-8.4-8.4-8.4s-8.4 3.8-8.4 8.4h3c0-3 2.4-5.4 5.4-5.4s5.4 2.4 5.4 5.4-2.4 5.4-5.4 5.4h-1.5v5.3L2.25 34.2l-.3.2c-1.8 1.5-2.4 3.9-1.6 6.1.8 2.2 2.8 3.6 5.2 3.6h4.3v16.7h45V44.1h4.3c2.3 0 4.4-1.4 5.2-3.6s.2-4.6-1.6-6.1Zm-1.2 5.1c-.3.8-1 1.7-2.3 1.7h-4.3v-1.3c0-1.1-.9-2-2-2h-41c-1.1 0-2 .9-2 2v1.3h-4.3c-1.3 0-2.1-.9-2.3-1.7-.3-.8-.2-1.9.6-2.7l28.4-15.2 28.5 15.2c.9.8 1 1.9.7 2.7Z'
                style={{
                  fill: '#000',
                }}
              />
            </svg>
          </div>
          <div>
          <h2 className='title-sm my-lg-24'>Changing Rooms</h2>
          </div>
          <div>
            <p className='txt-md'>Elevate your experience with Refresh Studios' well-appointed Changing Rooms. Designed for your convenience, these spaces offer privacy and comfort. Prepare for or wind down after class in a welcoming environment tailored to your needs</p>
          </div>
        </div>
        <div className={cn(styles['amenity'], 'py-lg-64 px-lg-48')}>
          <div className={styles['svg-cont-3']}>
            <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 35.2 58.7'>
              <path
                d='M19.6 24.9h-7.1v-1.2c3.1-.8 5.4-4.9 5.4-10.1C17.9 9 15.6 0 11.4 0S4.9 9 4.9 13.6c0 5.1 2.3 9.2 5.4 10.1v1.2H0v33.8h16V31h6.1c-1.4-1.4-2.3-3.6-2.5-6.1Zm-9.4-3.6c-1.6-.9-3.1-3.8-3.1-7.6 0-5.4 2.5-11.3 4.2-11.3s4.2 6 4.2 11.3c0 3.9-1.5 6.7-3.1 7.6v-5.4h-2.3v5.4h.1Zm17.7 12.6v-2.8c2.3-.6 3.9-3.6 3.9-7.4 0-3.4-1.7-10-4.8-10s-4.8 6.6-4.8 10c0 3.8 1.7 6.8 3.9 7.4v2.8h-7.4v24.8h16.5V33.9h-7.3Z'
                style={{
                  fill: '#000',
                }}
              />
            </svg>
          </div>
          <div>
            <h2 className='title-sm my-lg-24'>Natural Lighting</h2>
          </div>
          <div>
            <p className='txt-md'>
            Experience radiant practice at Refresh Studios with abundant natural lighting. Energize your sessions as sunlight creates a vibrant ambiance, enhancing focus and positivity. Embrace the harmonious blend of nature and wellness.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
