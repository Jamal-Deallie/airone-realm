import { ReactNode, useRef, useEffect, useState } from 'react';
import { useIsomorphicLayoutEffect } from '@/hooks/useIsomorphicLayout';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';

type AnimationProps = {
  children?: ReactNode;
};

export default function BatchFade({ children }: AnimationProps) {
  const root = useRef<HTMLDivElement>(null!);

  useIsomorphicLayoutEffect(() => {
    const mm = gsap.matchMedia(root);
    mm.add(
      '(min-width: 800px)',
      () => {
        const animation = gsap.fromTo(
          '.fade',
          { autoAlpha: 0, y: 100 },
          {
            duration: 0.8,
            ease: 'sine.in',
            y: 0,
            autoAlpha: 1,
          }
        );

        ScrollTrigger.create({
          trigger: root.current,
          start: 'top-=25 center',
          animation: animation,
        });
      },
      root
    );

    return () => {
      mm.revert();
    };
  }, []);

  return (
    <div ref={root} style={{ overflow: 'hidden' }}>
      {children}
    </div>
  );
}
