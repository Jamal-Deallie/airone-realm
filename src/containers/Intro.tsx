import Image from 'next/image';
import SplitLines from '@/animations/SplitLines';
import FadeIn from '@/animations/FadeIn';
import cn from 'classnames';
import styles from '@/styles/containers/Intro.module.scss';

export default function Intro() {
  return (
    <section className={cn(styles['description'], 'pt-lg-128 pt-sm-64 main')}>
      <div className='main-cont'>
        <div className={styles['outer-container']}>
          <SplitLines>
            <div className={styles['desc']}>
              <p className='title tertiary splits'>
                From captivating visuals to compelling narratives, AirOne will
                help you engage your audience in a whole new dimension.
              </p>
            </div>
          </SplitLines>
          <FadeIn start={'top center'}>
            <div className={cn(styles['image'], 'fadeIn mt-lg-48 mt-sm-32 br')}>
              <Image
                alt='AirOne Team'
                src={'/images/airone_team.webp'}
                fill
                sizes='(max-width: 768px) 100vw)'
              />
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
