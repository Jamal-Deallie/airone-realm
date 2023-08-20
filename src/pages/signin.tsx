import React from 'react';
import LoginForm from '@/components/LoginForm';
import Link from 'next/link';

export default function SigninPage() {
  return (
    <section className='primary-bg pt-nav-height'>
      <div className='main-cont full-h center-flex column py-lg-96 py-sm-64'>
        <h1 className='title-lg secondary-clr mb-lg-64 mb-sm-24'>Sign in</h1>
        <LoginForm />
        <Link href='/signup' className='secondary-clr'>
          Create an account
        </Link>
      </div>
    </section>
  );
}
