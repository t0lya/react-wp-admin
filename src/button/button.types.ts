import { AnchorHTMLAttributes } from 'react';

export interface ButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  type?: 'primary' | 'secondary';
  small?: boolean;
  hero?: boolean;
}
