import { memo, useState } from 'react';
import cn from 'classnames';
import styles from '@/styles/components/GridAccordion.module.scss';

type AccordionProps = {
  title: string;
  content: string;
};

function AccordionComponent({ title, content }: AccordionProps) {
  const [showAccordion, setShowAccordion] = useState<boolean>(false);

  function toggleAccordion() {
    setShowAccordion(showAccordion => !showAccordion);
  }

  return (
    <div
      className={cn(
        showAccordion
          ? 'secondary-bg tertiary-clr'
          : 'primary-bg secondary-clr',
        styles['accordion-panel'],
        'px-lg-16 py-lg-24 p-sm-16'
      )}>
      <div>
        <button
          className={styles['accordion-trigger']}
          onClick={toggleAccordion}>
          <p className='txt-md bold'>{title}</p>
          <span
            className={cn(showAccordion ? styles['rotate'] : null, 'txt-md')}>
            &#x2B;
          </span>
        </button>
      </div>
      <div
        className={cn(
          styles['accordion-content'],
          showAccordion ? styles['content-show'] : styles['content-hide']
        )}>
        <div>
          <p className='mt-lg-16 mt-sm-16 txt-md'>{content}</p>
        </div>
      </div>
    </div>
  );
}

export const GridAccordion = memo(AccordionComponent);
