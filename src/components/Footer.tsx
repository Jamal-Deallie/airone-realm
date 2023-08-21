import { useState, SyntheticEvent } from 'react';
import { links, supportLinks } from '@/data';
import Link from 'next/link';
import Instagram from '@/svgs/Instagram';
import Facebook from '@/svgs/Facebook';
import Twitter from '@/svgs/Twitter';
import TikTok from '@/svgs/TikTok';
import styles from '@/styles/components/Footer.module.scss';
import cn from 'classnames';
import Logo from '@/svgs/Logo';
import EmailForm from '@/components/EmailForm';
import NavLink from '@/components/NavLink';
export default function Footer() {
  const [email, setEmail] = useState('');
  const dateYear = new Date();
  const onInputSubmit = (e: SyntheticEvent) => {
    e.preventDefault();

    alert(`The email you entered was: ${email}`);
  };
  return (
    <footer
      className={cn('primary-bg pt-lg-32 pt-sm-32', styles['footer-cont'])}>
      <div className='grid-inner pb-lg-24 pb-sm-24'>
        <div className={styles['logo']}>
          <Logo />
        </div>
        <h1 className='clr-tertiary title-sm'>
          uniting body, mind, and spirit
        </h1>

        <EmailForm
          title='uniting body, mind, and spirit'
          classes={styles['form-wrap']}
        />

        <div className={styles['links']}>
          <div>
            <NavLink href='/' url='/'>
              Link 1
            </NavLink>
            <NavLink href='/' url='/'>
              Link 2
            </NavLink>
            <NavLink href='/' url='/'>
              Link 3
            </NavLink>
          </div>
          <div>
            <NavLink href='/' url='/'>
              Link 4
            </NavLink>
            <NavLink href='/' url='/'>
              Link 5
            </NavLink>
            <NavLink href='/' url='/'>
              Link 6
            </NavLink>
          </div>
        </div>
      </div>
      <div
        className={cn(
          styles['bottom'],
          'py-lg-16 px-lg-40 px-sm-16 py-sm-8 grid-inner'
        )}>
        <div className={styles['support']}>
          <NavLink href='/' url='/'>
            Link 4
          </NavLink>
          <NavLink href='/' url='/'>
            Link 5
          </NavLink>
          <NavLink href='/' url='/'>
            Link 6
          </NavLink>
        </div>
        <div className={styles['copy-right']}>
          <span className='txt-md'>{`@ ${dateYear.getFullYear()} Refresh Studios`}</span>
        </div>
        <div className={styles['socials']}>
          <Facebook />
          <Instagram />
          <Twitter />
          <TikTok />
        </div>
      </div>
    </footer>
  );
}
