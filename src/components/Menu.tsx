import { useEffect, useRef, useState } from 'react';
import { useIsomorphicLayoutEffect } from '@/hooks/useIsomorphicLayout';
import { gsap } from 'gsap';
import { links } from '@/data';
import Link from 'next/link';
import cn from 'classNames';
import styles from '@/styles/components/Menu.module.scss';
import { useLenis } from '@studio-freight/react-lenis';
import { SplitText } from 'gsap/dist/SplitText';

export default function Menu() {
  const [navIsOpened, setNavIsOpened] = useState(false);
  const openMenu = () => setNavIsOpened(!navIsOpened);
  const tl = useRef<gsap.core.Timeline>(null!);
  const lenis = useLenis();

  useEffect(() => {
    if (navIsOpened) {
      lenis?.stop();
    } else {
      lenis?.start();
    }
  }, [lenis, navIsOpened]);

  useIsomorphicLayoutEffect(() => {
    tl.current = gsap.timeline({ pause: true });
    let links = gsap.utils.toArray('.link');

    let ctx = gsap.context(() => {
      let splitTop = new SplitText('.split-top', { type: 'chars' });
      let splitBot = new SplitText('.split-bot', { type: 'chars' });
      tl.current

        .fromTo(
          '.cont',
          { yPercent: 900, autoAlpha: 0 },
          {
            duration: 1,
            transformOrigin: 'right top',
            autoAlpha: 1,
            yPercent: 0,
            display: 'block',
            ease: 'power3.inOut',
          },
          '-=50%'
        )
        .fromTo(
          links,
          { yPercent: 100, opacity: 0 },
          {
            duration: 0.5,
            yPercent: 0,
            opacity: 1,
            stagger: {
              amount: 0.2,
            },
          }
        )
        .reverse();
    });

    return () => ctx.revert();
  }, []);

  useIsomorphicLayoutEffect(() => {
    if (tl.current) {
      tl.current.reversed(!navIsOpened);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tl, navIsOpened]);

  useIsomorphicLayoutEffect(() => {
    if (tl.current) {
      tl.current.reversed(!navIsOpened);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tl, navIsOpened]);
  return (
    <>
      <button className={styles.btn} role='button' id='btn' onClick={openMenu}>
        Menu
        {/* <div className={styles['btn-wrap']}>
          <span className={cn(styles['label-top'], 'split-top')}>Menu</span>
        </div> */}
      </button>

      <div className={cn(styles['menu'], 'cont')}>
        <div className={styles.overlay}>
          <ul className='pt-12'>
            {links.map(({ id, label, path }) => {
              return (
                <li key={id} onClick={openMenu} className='link'>
                  <Link href={path}>{label}</Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
}
