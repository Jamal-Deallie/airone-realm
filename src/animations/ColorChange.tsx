import { ReactNode, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useIsomorphicLayoutEffect } from '@/hooks/useIsomorphicLayout';

export default function Home({ children }: { children: ReactNode }) {
  const colors = ['#8db7f9', '#6384DD', '#fcf5c7', '#8db7f9B', '#6fb936'];
  const textColor = ['#fff', '#000', '#fff', '#000'];
  const prevColor = ['#fff', '#000', '#fff', '#000'];
  const bgColors = [
    '#ffc09f',
    '#8db7f9',
    '#FFC8DD',
    '#8db7f9',
    '#FFC8DD',
    '#8db7f9',
  ];
  const root = useRef<HTMLDivElement>(null!);

  useIsomorphicLayoutEffect(() => {
    const mm = gsap.matchMedia(root);

    mm.add('(min-width: 850px)', () => {
      const sections: HTMLDivElement[] = gsap.utils.toArray('.sections');
      sections.forEach((section, i) => {
        const prevBgColor = i === 0 ? '' : bgColors[i - 1];
        const prevTextColor = i === 0 ? '' : textColor[i - 1];
        const currBgColor = i === 0 ? '' : bgColors[i - 1];
        const currTextColor = i === 0 ? '' : textColor[i - 1];

        ScrollTrigger.create({
          trigger: section,
          start: 'top 15%',
          onEnter: () =>
            gsap.to('.main', {
              backgroundColor: currBgColor,
              duration: 0.75,
              ease: 'sine.in',
              overwrite: 'auto',
            }),
          onLeaveBack: () =>
            gsap.to('.main', {
              backgroundColor: prevBgColor,
              duration: 0.75,
              ease: 'sine.in',
              overwrite: 'auto',
            }),
        });
      });
    });

    return () => {
      mm.revert();
    };
  }, []);

  return (
    <div ref={root} className='primary-bg'>
      {children}
    </div>
  );
}
