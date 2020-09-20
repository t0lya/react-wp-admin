import React, { FunctionComponent } from 'react';

import Notice from './index';

export default {
  title: 'Notice',
};

export const Notices: FunctionComponent = () => {
  return (
    <>
      <Notice>Default</Notice>
      <Notice dismissible>Dismissible Default</Notice>
      <Notice alt>Alt Default</Notice>
      <Notice type="info">Info</Notice>
      <Notice type="success">Success</Notice>
      <Notice type="warning">Warning</Notice>
      <Notice type="error">Error</Notice>
    </>
  );
};
