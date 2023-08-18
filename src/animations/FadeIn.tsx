import { ReactNode, useRef } from 'react';
import { useIsomorphicLayoutEffect } from '../hooks/useIsomorphicLayout';
import gsap from 'gsap';


type AnimationProps = {
  children?: ReactNode;
  delay?: 0;
  start?: string;
  duration?: number;
};

export default function FadeIn({ children, start, duration }: AnimationProps) {
  const root = useRef<HTMLDivElement>(null!);
  const tl = useRef<gsap.core.Timeline>(null!);

  useIsomorphicLayoutEffect(() => {
    const mm = gsap.matchMedia(root);
    mm.add('(min-width: 800px)', context => {
      tl.current = gsap.timeline({
        scrollTrigger: {
          start: start || 'center center',
          end: 'bottom bottom',
          trigger: root.current,
        },
      });

      tl.current.from('.fadeIn', {
        opacity: 0,
        duration: duration || 1,
        ease: 'power4.out',
      });
    });

    return () => {
      mm.revert();
    };
  }, []);

  return <div ref={root}>{children}</div>;
}
