import React, { FunctionComponent } from 'react';

import Counter from './index';

export default {
  title: 'Counter',
};

export const Counters: FunctionComponent = () => {
  return (
    <ul id="adminmenu" style={{ width: 'auto' }}>
      <li
        className="menu-top menu-top-first menu-icon-counter"
        id="menu-counter"
      >
        <a
          href="#counter"
          className="wp-first-item menu-top menu-icon-dashboard"
          aria-haspopup="false"
        >
          <div className="wp-menu-arrow">
            <div></div>
          </div>
          <div className="wp-menu-image dashicons-before dashicons-star-filled">
            <br />
          </div>
          <div className="wp-menu-name">
            Menu Item <Counter count={2} />
          </div>
        </a>
      </li>
    </ul>
  );
};
