import { useState, SyntheticEvent } from 'react';
import { links, supportLinks } from '@/data';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import styles from '@/styles/components/Footer.module.scss';
import cn from 'classnames';
import Logo from '@/svgs/Logo';
import EmailForm from '@/components/EmailForm';
import NavLink from '@/components/NavLink';
export default function Footer() {
  const [email, setEmail] = useState('');

  const onInputSubmit = (e: SyntheticEvent) => {
    e.preventDefault();

    alert(`The email you entered was: ${email}`);
  };
  return (
    <footer
      className={cn(
        'grid-inner primary-bg pt-lg-64 pt-sm-64 pb-lg-64',
        styles['footer-cont']
      )}>
      <div className={styles['logo']}>
        <Logo />
      </div>
      <h1 className='clr-tertiary title-sm'>uniting body, mind, and spirit</h1>

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
    </footer>
  );
}
