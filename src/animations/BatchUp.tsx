import { ReactNode, useRef } from 'react';
import { useIsomorphicLayoutEffect } from '../hooks/useIsomorphicLayout';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';

type AnimationProps = {
  children?: ReactNode;
  delay?: 0;
  start?: string;
};

export default function BatchUp({ children, start }: AnimationProps) {
  const root = useRef<HTMLDivElement>(null!);
  const tl = useRef<gsap.core.Timeline>(null!);

  useIsomorphicLayoutEffect(() => {
    let mm = gsap.matchMedia(root);

    mm.add('(min-width: 800px)', () => {
      let q = gsap.utils.selector(root.current);
      let targets: any[] = gsap.utils.toArray(q('.batch-item'));

      tl.current = gsap.timeline({
        scrollTrigger: {
          start: start || 'center center',
          end: 'bottom bottom',
          trigger: root.current,
        },
      });

      targets.forEach((el, index) => {
        const animation = gsap.fromTo(
          el,
          { autoAlpha: 0, y: 100 },
          {
            duration: 1.3,
            ease: 'power4.out',
            y: 0,
            autoAlpha: 1,
            delay: index * 0.1,
          }
        );

        ScrollTrigger.create({
          trigger: root.current,
          start: start || 'top+=15 center',
          animation: animation,
        });
      });
    });

    return () => {
      mm.revert();
    };
  }, []);

  return (
    <div ref={root} className='of-h'>
      {children}
    </div>
  );
}
