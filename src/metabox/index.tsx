import React, { useState, MouseEvent, FunctionComponent } from 'react';
import cx from 'classnames';

import { MetaboxProps } from './metabox.types';

export const Metabox: FunctionComponent<MetaboxProps> = ({
  children,
  heading = '',
}) => {
  const [expanded, setExpanded] = useState(true);

  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setExpanded((state) => !state);
  };

  return (
    <div className={cx('postbox', { closed: !expanded })}>
      <button
        type="button"
        className="handlediv"
        onClick={handleClick}
        aria-expanded={expanded}
      >
        <span className="screen-reader-text">Metabox collapse</span>
        <span className="toggle-indicator" aria-hidden="true"></span>
      </button>
      <h2 className="hndle ui-sortable-handle">
        <span>{heading}</span>
      </h2>
      <div className="inside">
        <div className="main">{children}</div>
      </div>
    </div>
  );
};

export default Metabox;
