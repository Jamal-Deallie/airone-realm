import { ReactNode } from 'react';
import Link, { LinkProps } from 'next/link';
import { usePathname } from 'next/navigation';
import cn from 'classnames';
import styles from '@/styles/components/NavLink.module.scss';

type NavLinkProps = LinkProps & {
  children: ReactNode;
  url: string;
  key?: string | number;
  classes?: string;
};

export default function NavLink({
  classes,
  children,
  url,
  ...props
}: NavLinkProps) {
  const pathname = usePathname();

  return (
    <Link
      passHref
      {...props}
      className={cn(
        [styles.link],
        pathname === url ? [styles.active] : null,
        classes
      )}>
      {children}
    </Link>
  );
}
