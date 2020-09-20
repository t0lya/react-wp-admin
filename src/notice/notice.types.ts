import { HTMLAttributes } from 'react';

export interface NoticeProps extends HTMLAttributes<HTMLDivElement> {
  type?: 'default' | 'info' | 'success' | 'warning' | 'error';
  alt?: boolean;
  dismissible?: boolean;
  onDismissal?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}
