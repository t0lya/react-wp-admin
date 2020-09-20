import React, { FunctionComponent } from 'react';
import cx from 'classnames';

import { CounterProps } from './counter.types';

const Counter: FunctionComponent<CounterProps> = ({
  className = '',
  count = 0,
  ...rest
}) => {
  return (
    <span
      className={cx('update-plugins', `count-${count}`, className)}
      {...rest}
    >
      <span className="plugin-count">{count}</span>
    </span>
  );
};

export default Counter;
