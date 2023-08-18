import { ReactNode, useRef } from 'react';
import { useIsomorphicLayoutEffect } from '../hooks/useIsomorphicLayout';
import gsap from 'gsap';

type AnimationProps = {
  children?: ReactNode;
  delay?: 0;
  start?: string;
  content?: boolean;
  iconUp?: boolean;
  heading?: string;
};

export default function ContainerAnimation({
  children,
  start,
  content = false,
  heading,
  iconUp = false,
}: AnimationProps) {
  const root = useRef<HTMLDivElement>(null!);
  const tl = useRef<gsap.core.Timeline>(null!);

  useIsomorphicLayoutEffect(() => {
    let mm = gsap.matchMedia(root);

    mm.add('(min-width: 800px)', () => {
      let q = gsap.utils.selector(root.current);
      let heading = gsap.utils.toArray(q('.title'));
      let stars = gsap.utils.toArray(q('.icon'));

      tl.current = gsap.timeline({
        scrollTrigger: {
          start: 'top center' || start,
          end: 'bottom bottom',
          trigger: root.current,
        },
      });

      tl.current.fromTo(
        heading,
        { y: 100, opacity: 0 },
        {
          opacity: 1,
          y: 0,
          ease: 'back',
          duration: 1,
          stagger: 0.24,
        }
      );

      tl.current.fromTo(
        stars,
        { width: '0%', opacity: 0 },
        {
          opacity: 1,
          width: '100%',
          ease: 'back',
          duration: 1.2,
          stagger: 0.25,
        },
        '-=1'
      );
      iconUp
        ? tl.current.fromTo(
            stars,
            { y: 50 },
            {
              y: 0,
              duration: 1,
              repeat: -1,
              yoyo: true,
              ease: 'sine.inOut',
              stagger: 0.1,
            },
            '<'
          )
        : tl.current.fromTo(
            stars,
            { x: 20 },
            {
              x: 0,
              duration: 0.65,
              repeat: -1,
              yoyo: true,
              ease: 'sine.inOut',
            },
            '<'
          );
    });

    return () => {
      mm.revert();
    };
  }, []);

  return <div ref={root}>{children}</div>;
}
