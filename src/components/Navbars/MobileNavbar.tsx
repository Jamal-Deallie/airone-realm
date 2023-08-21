import Link from 'next/link';
import Image from 'next/image';
import Menu from '@/components/Menu';
import styles from '@/styles/components/Navbar.module.scss';
import cn from 'classnames';
import Logo from '@/svgs/Logo';

export default function MobileNavbar() {
  return (
    <nav className={cn(styles['nav'], 'tertiary-bg')}>
      <div className={styles['inner']}>
        <Link href='/' className={cn(styles['logo'], 'center-elem' )}>
          <div className={styles['wrap']}>
            <Logo />
            <span className='title-xs'>Refresh</span>
          </div>
        </Link>
        <Menu />
      </div>
    </nav>
  );
}
