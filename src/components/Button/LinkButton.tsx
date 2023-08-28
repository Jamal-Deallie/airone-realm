import { memo } from 'react';
import Link from 'next/link';
import cn from 'classnames';
import { ILinkButtonProps } from '@/types';
import styles from '@/styles/components/Button.module.scss';

function LinkComponent({
  size,
  variant,
  children,
  href,
  classes,
  Ref,
}: ILinkButtonProps) {
  const styleClasses = cn(
    classes,
    styles['base'],
    styles[`${variant}-variant`],
    styles[`${size}`]
  );

  return (
    <Link href={href} passHref className={styleClasses} ref={Ref}>
      <span>{children}</span>
    </Link>
  );
}

export const LinkButton = memo(LinkComponent);
