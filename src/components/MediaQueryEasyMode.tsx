import { ReactNode } from 'react';
import { useMediaQuery } from 'react-responsive';

const useDesktopMediaQuery = () =>
  useMediaQuery({ query: '(min-width: 850px)' });

const useTabletAndBelowMediaQuery = () =>
  useMediaQuery({ query: '(max-width: 849px)' });

export const Desktop = ({ children }: { children: ReactNode }) => {
  const isDesktop = useDesktopMediaQuery();

  return isDesktop ? children : null;
};

export const TabletAndBelow = ({ children }: { children: ReactNode }) => {
  const isTabletAndBelow = useTabletAndBelowMediaQuery();

  return isTabletAndBelow ? children : null;
};
