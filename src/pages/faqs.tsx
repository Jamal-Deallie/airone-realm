import { useState } from 'react';
import { faqs } from '@/data';
import { GridAccordion } from '@/components/GridAccordion';
import styles from '@/styles/pages/Faqs.module.scss';
import cn from 'classnames';
import Layout from '@/components/Layout';
export default function Accordions() {
  const [currIndx, setCurrIndx] = useState<number | null>(null);
  const [prevIndx, setPrevIndx] = useState<number | null>(null);

  function toggleElement(indx: number) {
    setPrevIndx(prevIndx => currIndx);
    setCurrIndx(currIndx => indx);
  }

  return (
    <Layout>
      <div className='primary-bg'>
        <div className='py-lg-128 py-sm-64'>
          <div className='grid-inner pt-lg-64'>
            <div className={styles['title-cont']}>
              <h1 className='title-lg  border clr-secondary'>Got Questions?</h1>
            </div>
            <div className={styles['desc-cont']}>
              <p className='txt-md'>
                Explore our FAQs to find answers about class offerings,
                amenities, reservations, and more. Get informed and ready to
                embark on your wellness journey with Refresh Studio. Your
                questions, answered.
              </p>
            </div>

            <div className={cn(styles['accordion-cont'], 'lg-mt-10 sm-mt-6')}>
              {faqs.map(({ question, answer, id }) => {
                return (
                  <div
                    key={id}
                    className={(styles['accordion-wrap'], 'mb-lg-32 mb-sm-16')}>
                    <GridAccordion title={question} content={answer} />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
