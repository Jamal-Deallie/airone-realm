import gsap from 'gsap';
import Video from '@/components/Video';
import { useRef } from 'react';
import cn from 'classnames';
import { useIsomorphicLayoutEffect } from '@/hooks/useIsomorphicLayout';
import styles from '@/styles/components/HorizontalSlides.module.scss';

export default function HorizontalLoop() {
  const component = useRef(null!);
  const slider = useRef<HTMLDivElement>(null!);

  // useIsomorphicLayoutEffect(() => {
  //   gsap.registerPlugin(ScrollTrigger);
  //   let ctx = gsap.context(() => {
  //     let panels: HTMLDivElement[] = gsap.utils.toArray('.panel');
  //     let pauseRatio = 0.1;
  //     let snapPauseRatio = pauseRatio / (pauseRatio * 2 + 1);
  //     let snapPanelRatio = 1 / (panels.length - 1) / (pauseRatio * 2 + 1);
  //     let snapValues = panels.map(
  //       (panel, i) => snapPauseRatio + i * snapPanelRatio
  //     );
  //     snapValues.unshift(0);
  //     snapValues.push(1);
  //     let tl = gsap.timeline({
  //       scrollTrigger: {
  //         trigger: slider.current,
  //         pin: true,
  //         scrub: 1,
  //         snap: snapValues,
  //         end: () => '+=' + slider.current.offsetWidth,
  //         markers: true,
  //       },
  //     });
  //     tl.to(
  //       panels,
  //       {
  //         xPercent: -100 * (panels.length - 1),
  //         duration: 1,
  //         ease: 'none',
  //       },
  //       pauseRatio
  //     );
  //     tl.to({}, { duration: pauseRatio });

  //     panels.forEach((panel, i) => {
  //       ScrollTrigger.create({
  //         trigger: panel,
  //         containerAnimation: tl,
  //         start: 'left center',
  //         end: 'right center',
  //         onToggle: self => {
  //           if (self.isActive) {
  //             console.log('enter panel index:', i);
  //           }
  //         },
  //       });
  //     });
  //   }, slider);
  //   return () => ctx.revert();
  // });
  const root = useRef<HTMLDivElement>(null!);
  const tl = useRef<gsap.core.Timeline>(null!);

  useIsomorphicLayoutEffect(() => {
    const mm = gsap.matchMedia(root);

    mm.add('(min-width: 850px)', () => {
      let sections = gsap.utils.toArray('.panel');

      let scrollTween = gsap.to(sections, {
        xPercent: -100 * (sections.length - 1),
        ease: 'none', // <-- IMPORTANT!
        scrollTrigger: {
          trigger: root.current,
          pin: true,
          scrub: 0.1,
          //snap: directionalSnap(1 / (sections.length - 1)),
          end: '+=' + root.current.offsetWidth,
        },
      });

      gsap.set('.box-1, .box-2', { y: 100 });

      gsap.to('.box-1', {
        y: -130,
        duration: 2,
        ease: 'elastic',
        scrollTrigger: {
          trigger: '.box-1',
          containerAnimation: scrollTween,
          start: 'left center',
          toggleActions: 'play none none reset',
          id: '1',
        },
      });
    });

    return () => {
      mm.revert();
    };
  }, []);

  return (
    <div ref={root} className={cn(styles['container'], 'pt-nav-height')}>
      <div
        className={cn(
          styles['purple'],
          styles['panel'],
          'panel grid-inner py-lg-180'
        )}>
        <div className={styles['vid-cont']}>
          <Video dimensions='9/16' />
        </div>
        <div className={styles['desc']}>
          <h1 className='title-lg'>Vinayasa Yoga</h1>
          <p className='txt-lg mt-lg-64'>
            Refresh Studio offers invigorating Vinyasa Yoga classes, focusing on
            synchronized breath and dynamic postures. Connect fluidly between
            movements, enhancing flexibility, strength, and mental clarity.
            Suitable for all levels, it harmonizes body and mind, promoting
            holistic well-being in a serene and inclusive environment.
          </p>
        </div>
      </div>
      <div className={cn(styles['red'], styles['panel'], 'panel')}>
        ONE <div className={cn(styles['box-1'], 'box-1')}>box-1</div>
      </div>
      <div className={cn(styles['purple'], styles['panel'], 'panel')}>
        TWO <div className={cn(styles['box-2'], 'box-2')}>box-2</div>
      </div>
      <div
        className={cn(
          styles['orange'],
          styles['panel'],
          'panel grid-inner py-lg-180'
        )}>
        <div className={cn(styles['vid-cont'], 'vid')}>
          <Video />
        </div>
      </div>
    </div>
  );
}
