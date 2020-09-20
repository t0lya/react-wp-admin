import { HTMLAttributes } from 'react';

export interface CounterProps extends HTMLAttributes<HTMLSpanElement> {
  className?: string;
  count?: number;
}
