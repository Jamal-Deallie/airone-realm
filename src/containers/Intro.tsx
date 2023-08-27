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
                Our mission is to{' '}
                <span className={cn(styles['wrap-1'], 'split-child')}>
                  <Image
                    alt='yoga class'
                    src='/images/intro-3.jpg'
                    fill
                    sizes='(min-width: 850px) 75vw, 100vw, (max-width: 849px) 33vw'
                  />
                </span>
                foster{' '}
                <span className={cn(styles['wrap-2'], 'split-child')}>
                  <Image
                    alt='yoga class'
                    src='/images/intro-5.webp'
                    fill
                    sizes='(min-width: 850px) 75vw, 100vw, (max-width: 849px) 33vw'
                  />
                </span>{' '}
                wellness through mindful{' '}
                <span className={cn(styles['wrap-3'], 'split-child')}>
                  <Image
                    alt='yoga class'
                    src='/images/intro-6.webp'
                    fill
                    sizes='(min-width: 850px) 75vw, 100vw, (max-width: 849px) 33vw'
                  />
                </span>{' '}
                <span className={cn(styles['wrap-4'], 'split-child')}>
                  <Image
                    alt='yoga class'
                    src='/images/intro-1.webp'
                    fill
                    sizes='(min-width: 850px) 75vw, 100vw, (max-width: 849px) 33vw'
                  />
                </span>{' '}
                movement, uniting body, mind, and spirit
              </p>
            </SplitAngled>
          </div>
        </div>
      </div>
    </section>
  );
}

{
  /*  */
}
