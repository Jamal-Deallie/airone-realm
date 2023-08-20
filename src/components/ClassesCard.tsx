import Image from 'next/image';
import styles from '@/styles/components/Card.module.scss';
import cn from 'classnames';

export default function ClassesCard({
  service,
  src,
  desc,
}: {
  src?: string;
  service?: string;
  desc?: string;
}) {
  return (
    <div className={cn(styles['card'], 'batch-item')}>
      <div className={styles['service']}>
        {/* <Image alt={service} src={src} fill sizes='(max-width: 768px) 100vw)' /> */}
      </div>
      <div className={styles.subheader}>
        <h2>Service</h2>
      </div>
      <hr />
      <div className={styles['item-desc']}>
        <p>Desc</p>
      </div>
    </div>
  );
}
