import React, { FunctionComponent } from 'react';
import cx from 'classnames';

import { NoticeProps } from './notice.types';

const Notice: FunctionComponent<NoticeProps> = ({
  type = 'default',
  alt = false,
  dismissible = false,
  onDismissal,
  children,
  ...rest
}) => {
  return (
    <div
      className={cx('notice', type === 'default' ? '' : `notice-${type}`, {
        'notice-alt': alt,
        'is-dismissible': dismissible,
      })}
      {...rest}
    >
      <p>{children}</p>
      {dismissible && (
        <button type="button" onClick={onDismissal} className="notice-dismiss">
          <span className="screen-reader-text">Dismiss this notice.</span>
        </button>
      )}
    </div>
  );
};

export default Notice;
