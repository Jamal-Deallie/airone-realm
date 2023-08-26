import Image from 'next/image';
import cn from 'classnames';
import LoginForm from '@/components/LoginForm';
import Link from 'next/link';
import styles from '@/styles/pages/SignIn.module.scss';

export default function LoginPage() {
  return (
    <section className={(cn('tertiary-bg'), styles['signin'])}>
      <div className={cn(styles['wrap'], 'pt-nav-height')}>
        <div className='grid-inner py-lg-48 py-sm-64'>
          <div className={cn(styles['form'], 'pt-lg-64')}>
            <h1 className='title-lg secondary-clr mb-lg-96 mb-sm-24 tac'>
              Login
            </h1>
            <LoginForm />
            <Link href='/register' className='secondary-clr tac bold'>
              Create an account
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
