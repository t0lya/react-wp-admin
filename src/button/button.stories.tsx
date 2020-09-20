import React, { FunctionComponent } from 'react';

import Button from './index';

export default {
  title: 'Button',
};

export const Buttons: FunctionComponent = () => (
  <div style={{ display: 'flex', alignItems: 'center' }}>
    <Button type="primary" style={{ marginRight: '25px' }}>
      Primary button
    </Button>
    <Button type="secondary" style={{ marginRight: '25px' }}>
      Secondary button
    </Button>
    <Button hero>Hero button</Button>
  </div>
);
