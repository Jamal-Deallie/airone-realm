import { LinkButton } from '@/components/Button/LinkButton';
import styles from '@/styles/containers/CTA.module.scss';
import cn from 'classnames';

export default function CTA() {
  return (
    <div className='grid-inner pb-lg-128 py-sm-64'>
      <div className={styles['title']}>
        <h1 className='title-lg tac'>GET STARTED TODAY</h1>
      </div>
      <div className={styles['desc']}>
        <p className='tac txt-md'>
          Discover your inner radiance with a Refresh Studio Membership! Elevate
          your well-being through unlimited yoga classes, expert guidance, and a
          supportive community. Embrace balance and vitality. Join today and
          embark on a journey to a healthier, happier you!
        </p>
      </div>
      <div className={styles['btn-cont']}>
        <LinkButton href='/' size='lg' variant='secondary'>
          Join Now
        </LinkButton>
      </div>
    </div>
  );
}
