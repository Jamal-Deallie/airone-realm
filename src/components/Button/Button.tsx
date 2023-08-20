import { memo } from 'react';
import cn from 'classnames';
import styles from '@/styles/components/Button.module.scss';
import { IButtonProps } from '@/types';

function ButtonComponent({
  variant,
  classes,
  size,
  children,
  type,
  disabled,
  ...props
}: IButtonProps) {
  const styleClasses = cn(
    classes,
    styles['base'],
    styles[`${size}`],
    styles[`${variant}-variant`]
    // {
    //   [styles['base-disabled']]: disabled === true,
    // }
  );

  return (
    <button type={type} className={styleClasses} {...props}>
      <span>{children}</span>
    </button>
  );
}

export const Button = memo(ButtonComponent);
