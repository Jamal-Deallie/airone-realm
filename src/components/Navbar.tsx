import Link from 'next/link';
import Image from 'next/image';
import Menu from '@/components/Menu';
import styles from '@/styles/components/Navbar.module.scss';
import cn from 'classnames';

export default function Navbar() {
  return (
    <nav className={cn(styles['nav'], 'tertiary-bg')}>
      <div className={styles['inner']}>
        <Link href='/' className={styles['logo']}>
          <div className={styles['wrap']}>
            <Image
              src={'/images/a-logo.svg'}
              alt='logo'
              fill
              sizes='(max-width: 768px) 100vw)'
              priority
            />
          </div>
        </Link>
        <Menu />
      </div>
    </nav>
  );
}
