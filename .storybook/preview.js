import React from 'react';
import '@icon/dashicons/dashicons.css';

import './css/wp-admin.css';

export const decorators = [
  (Story) => (
    <div className="wp-admin wp-core-ui js index-php auto-fold admin-bar customize-support svg sticky-menu">
      <div id="wpcontent">
        <Story />
      </div>
    </div>
  ),
];
