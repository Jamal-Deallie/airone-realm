import { ReactNode, useRef } from 'react';
import { useIsomorphicLayoutEffect } from '@/hooks/useIsomorphicLayout';
import gsap from 'gsap';
import { horizontalLoop } from '@/helpers/horizontalLoop';

type Props = {
  children: ReactNode;
  reverse?: boolean;
  speed?: number;
};

export default function MarqueeText({
  children,
  reverse = false,
  speed = 0.2,
}: Props) {
  const root = useRef<HTMLDivElement>(null!);

  useIsomorphicLayoutEffect(() => {
    let ctx = gsap.context(() => {
      let loops = gsap.utils.toArray('.txt-wrapper').map((line, i) => {
        const targets: any[] = gsap.utils.toArray('.scroll-txt');
        document.fonts.ready.then(function () {
          const tl = horizontalLoop(targets, {
            repeat: -1,
            speed: 1 + i * speed,
            draggable: true,
            reversed: reverse,
            paddingRight: parseFloat(
              //@ts-ignore
              gsap.getProperty(targets[0], 'marginRight', 'px')
            ),
          });
        });
      });
    }, root);

    return () => ctx.revert();
  }, []);

  return <div ref={root}>{children}</div>;
}
