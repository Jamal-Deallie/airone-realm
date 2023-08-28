import ContactForm from '@/components/ContactForm';
import Layout from '@/components/Layout';
import styles from '@/styles/pages/Contact.module.scss';
import cn from 'classnames';

export default function ContactPage() {
  return (
    <Layout>
      <div className='pt-nav-height primary-bg'>
        <div className='grid-inner pt-lg-128 pt-sm-64'>
          <div className={styles['title']}>
            <h1 className='title-lg'>Contact Refresh</h1>
          </div>
        </div>
        <div className='grid-inner pb-lg-128 pb-sm-64'>
          <div className={cn(styles['desc'], 'pt-lg-16 pt-sm-16')}>
            <p>
              Connect with us at Refresh Studios through our contact web page.
              Reach out for inquiries, class schedules, or any assistance. We're
              here to support your wellness journey and provide the information
              you need
            </p>
            <div className={cn(styles['contact-details'], 'pt-lg-16 pt-sm-8')}>
              <div className={styles['detail']}>
                <span className={styles['svg-cont']}>
                  {' '}
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='currentColor'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    className='lucide lucide-at-sign'>
                    <circle cx='12' cy='12' r='4' />
                    <path d='M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-4 8' />
                  </svg>
                </span>{' '}
                <span>info@refreshstudios.com</span>
              </div>
              <div className={styles['detail']}>
                <span className={styles['svg-cont']}>
                  {' '}
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='currentColor'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    className='lucide lucide-phone'>
                    <path d='M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z' />
                  </svg>
                </span>{' '}
                <span>(123)123-4567</span>
              </div>
            </div>
          </div>

          <div className={styles['form-wrap']}>
            <ContactForm />
          </div>
        </div>
      </div>
    </Layout>
  );
}
