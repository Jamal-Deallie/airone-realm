import {
  DetailedHTMLProps,
  ForwardedRef,
  forwardRef,
  HTMLAttributes,
  memo,
} from 'react';
import cn from 'classnames';
import styles from '@/styles/components/Input.module.scss';

export interface InputProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  classes?: string;
  autoComplete?: string;
  name?: string;
  type?: string;
  error?: string;
}

const InputComponent = forwardRef(
  (
    { classes, autoComplete, name, type, error, ...rest }: InputProps,
    ref: ForwardedRef<HTMLInputElement>
  ) => {
    return (
      <input
        className={cn(styles['input'], classes)}
        autoComplete={autoComplete}
        name={name}
        type={type}
        ref={ref}
        {...rest}
      />
    );
  }
);

export const Input = memo(InputComponent);
