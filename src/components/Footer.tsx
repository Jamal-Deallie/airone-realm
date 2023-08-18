import { useState, SyntheticEvent } from 'react';
import { links, supportLinks } from '@/data';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import styles from '@/styles/components/Footer.module.scss';
import cn from 'classnames';


export default function Footer() {
  const [email, setEmail] = useState('');

  const onInputSubmit = (e: SyntheticEvent) => {
    e.preventDefault();

    alert(`The email you entered was: ${email}`);
  };
  return (
    <div className={cn(styles['footer-cont'], 'bg-primary')}>
      <div className={styles['image']}>
        <Image
          alt='Landscape'
          src={'/images/footer-top.webp'}
          fill
          sizes='(max-width: 768px) 100vw)'
        />
      </div>
      <footer className={styles['footer']}>
        <div className='grid-inner'>
          <div className={styles['form']}>
            <div>
              <h4 className='title'>
                Stay up to date with the latest news from the Airone
              </h4>
            </div>
            <form onSubmit={onInputSubmit}>
              <div className={styles['field-wrap']}>
                <input
                  placeholder='Email'
                  className={styles['field']}
                  type='email'
                  onChange={e => setEmail(e.target.value)}
                />

                <button type='submit'>
                  {' '}
                  <span className='clr-tertiary'>&#11106;</span>
                </button>
              </div>
            </form>
          </div>

          <div className={styles['link-wrap']}>
            <h5 className='title clr-tertiary'>Menu</h5>
            <ul>
              {links.map(({ id, path, label }) => {
                return (
                  <li key={id}>
                    <Link href={path} className='clr-tertiary'>
                      {label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className={styles['support-wrap']}>
            <h5 className='title clr-tertiary'>Support</h5>

            <ul>
              {supportLinks.map(({ id, path, label }) => {
                return (
                  <li key={id}>
                    <Link href={path} className='clr-tertiary'>
                      {label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
  
      </footer>
    </div>
  );
}
