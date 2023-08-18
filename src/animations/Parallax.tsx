import { ReactNode } from 'react';
import { useIsomorphicLayoutEffect } from '@/hooks/useIsomorphicLayout';
import { gsap } from 'gsap';
import { mapRange } from '@/helpers/mapRange';
import { useRef } from 'react';
import useWindowSize from '@/hooks/useWindowSize';

type AnimationProps = {
  children?: ReactNode;
  speed?: number;
  id?: string;
  className?: string;
  position?: string;
};
export default function Parallax({
  className,
  children,
  speed = 1,
  id = 'parallax',
  position,
}: AnimationProps) {
  const root = useRef<HTMLDivElement>(null!);
  const target = useRef<HTMLDivElement>(null!);
  const tl = useRef<gsap.core.Timeline>(null!);
  const { width: windowWidth } = useWindowSize();

  useIsomorphicLayoutEffect(() => {
    const mm = gsap.matchMedia();
    mm.add(
      '(min-width: 800px)',
      () => {
        const y = windowWidth * speed * 0.1;

        const setY = gsap.quickSetter(target.current, 'y', 'px');
        const set3D = gsap.quickSetter(target.current, 'force3D');

        tl.current = gsap.timeline({
          scrollTrigger: {
            id: id,
            trigger: root.current,
            scrub: true,
            start: 'top bottom',
            end: 'bottom top',
            onUpdate: e => {
              if (position === 'top') {
                setY(e.progress * y);
              } else {
                setY(-mapRange(0, 1, e.progress, -y, y));
              }

              set3D(e.progress > 0 && e.progress < 1);
            },
          },
        });

        return () => {
          tl.current.kill();
        };
      },
      root
    );
    return () => {
      mm.revert();
    };
  }, [id, speed, position, windowWidth]);

  return (
    <div ref={root}>
      <div ref={target} className={className}>
        {children}
      </div>
    </div>
  );
}
