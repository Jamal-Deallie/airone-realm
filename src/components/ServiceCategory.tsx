import { useRef } from 'react';
import Image from 'next/image';
import styles from '@/styles/containers/Categories.module.scss';
import cn from 'classnames';
import { useIsomorphicLayoutEffect } from '@/hooks/useIsomorphicLayout';
import gsap from 'gsap';
import SplitText from 'gsap/dist/SplitText';

export default function Categories({
  reverse = false,
  src,
  title,
  desc,
  id,
}: {
  reverse?: boolean;
  src: string;
  title: string;
  desc: string;
  id: number;
}) {
  const root = useRef<HTMLDivElement>(null!);
  const tl = useRef<gsap.core.Timeline>(null!);

  useIsomorphicLayoutEffect(() => {
    const mm = gsap.matchMedia(root);

    mm.add('(min-width: 850px)', () => {
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
          '.cat-desc',
          { opacity: 0, ease: 'sine.in', duration: 1.25 },
          '-=1.75'
        )
        .from(
          '.cat-img',
          { opacity: 0, ease: 'sine.in', duration: 1.5 },
          '-=1.75'
        );
    });

    return () => {
      mm.revert();
    };
  }, []);

  return (
    <div
      ref={root}
      className={cn(
        'py-lg-180 pb-sm-64 main',
        reverse ? styles['cat-reverse'] : styles['cat']
      )}>
      <div className='grid-inner'>
        <div className={cn(styles['desc'], 'pt-lg-24')}>
          <div className={styles['title']}>
            <h1 className='title-lg'>{title}</h1>
          </div>
          <p className='txt-md pt-lg-64 pt-sm-32 cat-desc'>{desc}</p>
        </div>
        <aside className={cn(styles[`img-${id}`], 'cat-img')}>
          <Image
            src={src}
            alt={title}
            fill
            sizes='(min-width: 850px) 75vw, 100vw, (max-width: 849px) 33vw'
          />
        </aside>
      </div>
    </div>
  );
}
