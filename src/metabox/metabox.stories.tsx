import React, { FunctionComponent } from 'react';

import MetaboxComponent from './index';

export default {
  title: 'Metabox',
};

export const Metabox: FunctionComponent = () => (
  <div id="dashboard-widgets" className="metabox-holder">
    <div id="postbox-container-1" className="postbox-container">
      <div id="normal-sortables" className="meta-box-sortables ui-sortable">
        <MetaboxComponent heading="Title">
          <p>
            <strong>Metabox</strong>
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud.
          </p>
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo.
          </p>
        </MetaboxComponent>
      </div>
    </div>
  </div>
);
