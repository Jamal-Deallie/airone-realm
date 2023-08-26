import { useRouter } from 'next/router';
import { auth } from '@/lib/lucia';
import { useState } from 'react';
import { Input } from '@/components/Inputs';
import Link from 'next/link';
import styles from '@/styles/pages/Register.module.scss';
import cn from 'classnames';
import RegisterForm from '@/components/RegisterForm';
import type { GetServerSidePropsContext, GetServerSidePropsResult } from 'next';
import Layout from '@/components/Layout';
// export const getServerSideProps = async (
//   context: GetServerSidePropsContext
// ): Promise<GetServerSidePropsResult<{}>> => {
//   const authRequest = auth.handleRequest(context);
//   const session = await authRequest.validate();
//   if (session) {
//     return {
//       redirect: {
//         destination: '/',
//         permanent: false,
//       },
//     };
//   }
//   return {
//     props: {},
//   };
// };

export default function RegisterPage() {
  return (
    <Layout>
      <section className={(cn('tertiary-bg'), styles['signin'])}>
        <div className={cn(styles['wrap'], 'pt-nav-height')}>
          <div className='grid-inner py-lg-48 py-sm-64'>
            <div className={cn(styles['form'], 'pt-lg-64')}>
              <h1 className='title-lg secondary-clr mb-lg-48 mb-sm-24 tac'>
                Register
              </h1>
              <RegisterForm />
              <Link href='/login' className='secondary-clr tac bold'>
                Sign In
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
