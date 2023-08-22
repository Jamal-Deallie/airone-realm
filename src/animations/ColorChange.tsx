import { ReactNode, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useIsomorphicLayoutEffect } from '@/hooks/useIsomorphicLayout';

export default function Home({ children }: { children: ReactNode }) {
  const colors = ['#6384DD', '#6fb936', '#ccc', '#6fb936'];
  const textColor = ['#000', '#fff'];
  const prevColor = ['#fff', '#000'];
  const bgColors = ['#C198F1', '#6fb936', '#ccc', '#6384DD'];
  const root = useRef<HTMLDivElement>(null!);

  useIsomorphicLayoutEffect(() => {
    
    const mm = gsap.matchMedia(root);

    mm.add('(min-width: 849px)', () => {
      const sections: HTMLDivElement[] = gsap.utils.toArray('.sections');
      sections.forEach((section, i) => {
        const prevBgColor = i === 0 ? '' : colors[i - 1];
        const prevTextColor = i === 0 ? '' : textColor[i - 1];
        const currBgColor = i === 0 ? '' : bgColors[i - 1];
        const currTextColor = i === 0 ? '' : prevColor[i - 1];

        ScrollTrigger.create({
          trigger: section,
          start: 'top 50%',
          onEnter: () =>
            gsap.to('.main', {
              backgroundColor: currBgColor,
              color: currTextColor,
              overwrite: 'auto',
            }),
          onLeaveBack: () =>
            gsap.to('.main', {
              backgroundColor: prevBgColor,
              color: prevTextColor,
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
