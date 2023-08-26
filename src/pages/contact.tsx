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
        <div className='grid-inner'>
          <div className={cn(styles['desc'], 'pt-lg-16')}>
            <p>
              Connect with us at Refresh Studios through our contact web page.
              Reach out for inquiries, class schedules, or any assistance. We're
              here to support your wellness journey and provide the information
              you need
            </p>
          </div>
          <div className={styles['form-wrap']}>
            <ContactForm />
          </div>
        </div>
      </div>
    </Layout>
  );
}
