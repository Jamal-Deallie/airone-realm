import Image from 'next/image';
import SplitAngled from '@/animations/SplitAngled';
import FadeIn from '@/animations/FadeIn';
import cn from 'classnames';
import styles from '@/styles/containers/Intro.module.scss';

export default function Intro() {
  return (
    <section className={cn(styles['desc'], 'py-lg-128 py-sm-64 main')}>
      <div className='main-cont'>
        <div className={styles['outer-container']}>
          <div className={styles['desc']}>
            <SplitAngled>
              <p className='title-lg splits'>
                Our mission is to foster wellness through mindful movement,
                uniting body, mind, and spirit
              </p>
            </SplitAngled>
          </div>
        </div>
      </div>
    </section>
  );
}

{
  /* <span className={cn(styles['wrap'], 'split-child')}></span> */
}
