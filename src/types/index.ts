import { LinkProps } from 'next/link';
import { ReactNode, ButtonHTMLAttributes, DetailedHTMLProps } from 'react';

interface IBaseButton {
  size?: 'sm' | 'md' | 'lg' | 'xlg';
  classes?: string;
  variant?: string;
  block?: boolean;
}
export interface ILinkButtonProps extends IBaseButton, LinkProps {
  href: string;
  children: ReactNode;
}

export interface IButtonProps
  extends IBaseButton,
    DetailedHTMLProps<
      ButtonHTMLAttributes<HTMLButtonElement>,
      HTMLButtonElement
    > {
  onClick?: () => void;
  isLoading?: boolean;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
}

export interface IProduct {
  _id: string;
  name: string;
  slug: string;
  description: string;
  price: number;
  image: string;
  spicy: boolean;
  createdAt: Date;
}
