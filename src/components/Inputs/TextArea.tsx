import {
  DetailedHTMLProps,
  ForwardedRef,
  forwardRef,
  HTMLAttributes,
  memo,
} from 'react';
import cn from 'classnames';
import styles from '@/styles/components/Input.module.scss';

export interface TextAreaProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLTextAreaElement>,
    HTMLTextAreaElement
  > {
  classes?: string;
  autoComplete?: string;
  name?: string;
  error?: string;
  rows?: number;
}

const TextAreaComponent = forwardRef(
  (
    { classes, autoComplete, name, error, rows, ...rest }: TextAreaProps,
    ref: ForwardedRef<HTMLTextAreaElement>
  ) => {
    return (
      <textarea
        className={cn(styles['input'], classes)}
        autoComplete={autoComplete}
        name={name}
        ref={ref}
        rows={rows}
        {...rest}
      />
    );
  }
);

export const TextArea = memo(TextAreaComponent);
