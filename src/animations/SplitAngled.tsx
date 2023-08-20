import { ReactNode, useRef } from 'react';
import { useIsomorphicLayoutEffect } from '../hooks/useIsomorphicLayout';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import SplitText from 'gsap/dist/SplitText';

type AnimationProps = {
  children?: ReactNode;
  delay?: 0;
  start?: string;
  content?: boolean;
  heading?: string;
};

export default function SplitAngled({
  children,
  start,
  content = false,
  heading,
}: AnimationProps) {
  const root = useRef<HTMLDivElement>(null!);
  const tl = useRef<gsap.core.Timeline>(null!);

  useIsomorphicLayoutEffect(() => {
    const mm = gsap.matchMedia();
    mm.add(
      '(min-width: 800px)',
      () => {
        tl.current = gsap.timeline({
          scrollTrigger: {
            start: 'top center',
            end: 'bottom bottom',
            trigger: root.current,
          },
        });

        gsap.set(root.current, { overflow: 'hidden' });

        const splitChild = new SplitText('.splits', {
          type: 'words',
          wordsClass: 'split-child',
        });

        const splitParent = new SplitText('.splits', {
          type: 'lines',
          linesClass: 'split-parent',
        });

        // tl.current.from(splitChild.words, {
        //   opacity: 0,
        //   y: '50%',
        //   duration: 1.5,
        //   ease: 'power4.out',
        //   stagger: 0.2,
        // });
        tl.current
          .from(splitChild.words, {
            yPercent: 100,
            duration: 1.5,
            ease: 'power4.out',
          })
          .to(
            splitParent.lines,
            {
              clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%',
              stagger: 0.1,
            },
            0
          );
        return () => {
          splitChild.revert();
        };
      },
      root
    );

    return () => {
      mm.revert();
    };
  }, []);

  return <div ref={root}>{children}</div>;
}
