import Link from 'next/link';
import NavLink from '@/components/NavLink';
import Logo from '@/svgs/Logo';
import cn from 'classnames';
import styles from '@/styles/components/DesktopNavbar.module.scss';
import { LinkButton } from '@/components/Button/LinkButton';
import CartButton from '@/components/CartButton';

export default function DesktopNavbar() {
  return (
    <nav className={cn('hide-mobile', styles['nav'])}>
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
              <NavLink href='#' url='#'>
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
                Faqs
              </NavLink>
            </div>
          </div>
        </div>

        <div className={styles['btn-cont']}>
          <NavLink href='/faqs' url='/faqs'>
            My Account
          </NavLink>
          <CartButton />
        </div>
      </div>
    </nav>
  );
}
