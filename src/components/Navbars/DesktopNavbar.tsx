import { useRef } from 'react';
import { useIsomorphicLayoutEffect } from '@/hooks/useIsomorphicLayout';
import gsap from 'gsap';
import cn from 'classnames';
import Link from 'next/link';
import Logo from '@/svgs/Logo';
import NavLink from '@/components/NavLink';
import CartButton from '@/components/CartButton';
import styles from '@/styles/components/DesktopNavbar.module.scss';


export default function DesktopNavbar() {
  const root = useRef<HTMLDivElement>(null!);
  const tl = useRef<gsap.core.Timeline>(null!);

  useIsomorphicLayoutEffect(() => {
    const mm = gsap.matchMedia(root);

    mm.add('(min-width: 850px)', () => {
      gsap.to(root.current, { opacity: 1, delay: 1, duration: 2.1 });
    });

    return () => {
      mm.revert();
    };
  }, []);

  return (
    <nav className={cn('hide-mobile nav-target', styles['nav'])} ref={root}>
      <div className={cn(styles['wrap'], 'px-lg-40')}>
        <div className={styles['logo-wrap']}>
          <Link
            href='/'
            aria-label='Refresh Studio Logo. Click to navigate to home page'>
            <div className={styles['logo']}>
              <Logo />
            </div>
            <span className='title-xs'>Refresh</span>
          </Link>
        </div>

        <div className={cn(styles.links, 'center-elem')}>
          <div className={styles['link-wrap']}>
            <div>
              <NavLink href='/about' url='about' classes='heading-ft'>
                About
              </NavLink>
            </div>
            <div className={styles['wrap-link']}>
              <NavLink href='#' url='#'>
                Studio
              </NavLink>
            </div>
            <div className={styles['wrap-link']}>
              <NavLink href='#' url='#'>
                Classes
              </NavLink>
            </div>
            <div className={styles['wrap-link']}>
              <NavLink href='/faqs' url='/faqs'>
                Membership
              </NavLink>
            </div>
          </div>
        </div>

        <div className={styles['btn-cont']}>
          <CartButton />
        </div>
      </div>
    </nav>
  );
}
