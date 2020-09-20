import React, { FunctionComponent } from 'react';
import cx from 'classnames';

import { ButtonProps } from './button.types';

const Button: FunctionComponent<ButtonProps> = ({
  children,
  type = 'primary',
  small = false,
  hero = false,
  ...rest
}) => {
  return (
    <a
      {...rest}
      className={cx('button', {
        'button-primary': type === 'primary',
        'button-secondary': type === 'secondary',
        'button-small': small,
        'button-hero': hero,
      })}
    >
      {children}
    </a>
  );
};

export default Button;
