import React from 'react';
import styles from '@/styles/components/PricingCard.module.scss';
import { Button } from '@/components/Button';
import cn from 'classnames';

export default function PricingCard() {
  return (
    <div className={cn(styles['card'], 'tertiary-clr p-lg-48 p-sm-32')}>
      <div className={styles['inner']}>
        <div className={cn(styles['desc'], 'secondary-clr')}>
          <span className='txt-md bold'>Single Class</span>
          <p className='pt-lg-16 pt-sm-16 txt-lg bold'>$30</p>
          <p className='pt-lg-24 pt-sm-16'>
            Class packages are a great alternative to memberships and your
            classes will never expire.
          </p>
          <ul className='pt-lg-48 pt-sm-16 txt-md'>
            <li>Comfortable practice space with ample room for movement.</li>
            <li>Availability of mats, blocks, straps for enhanced practice.</li>
            <li> Post-class zone for unwinding and reflection.</li>
            <li>
              Fresh water and herbal teas for revitalization post-session.
            </li>
          </ul>
        </div>
        <div className={styles['btn-cont']}>
          <Button variant='secondary' size='lg'>
            Buy Now
          </Button>
        </div>
      </div>
    </div>
  );
}
