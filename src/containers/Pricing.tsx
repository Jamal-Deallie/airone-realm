import React from 'react';
import PricingCard from '@/components/PricingCard';
import { Button } from '@/components/Button';
import cn from 'classnames';
import styles from '@/styles/containers/Pricing.module.scss';

export default function Pricing() {
  return (
    <div className={cn('py-lg-128 py-sm-64 main', styles['pricing'])}>
      <div className='grid-inner'>
        <div className={cn(styles['title'], 'mb-lg-64' )}>
          <h1 className='title-lg tac'>CLASS PRICING</h1>
        </div>
        <PricingCard />
        <PricingCard />
        <PricingCard />
      </div>
    </div>
  );
}
