import React, { FunctionComponent } from 'react';

import { TabContainer, Tab } from './index';
import Button from '../button';

export default {
  title: 'Tabs',
};

export const Tabs: FunctionComponent = () => (
  <TabContainer>
    <Tab label="Tab #01">
      <h3>#01</h3>
      <p>
        Lorem ipsum dolor sit amet, iudico petentium ea mea, ne mea autem
        percipit. Cu magna graeci duo, ea dicant tincidunt eum, pri at tollit
        semper verterem. Eligendi delicatissimi ei has, lorem altera ea duo. Ius
        ne vocent suscipit, pertinax antiopam periculis at eos.
      </p>
      <p>
        Lorem ipsum dolor sit amet, quod labores no eum, equidem maiorum
        patrioque per an, at atomorum urbanitas appellantur per. Ut his lorem
        detraxit, sed ne idque epicuri voluptaria, nonumes praesent ex sit.
        Feugait adipiscing vel ne. Mel clita audire placerat no. Probo perfecto
        mea id, per zril oblique pertinacia in, id liber bonorum eligendi eum.
      </p>
      <p>
        <Button type="primary">Don't click me</Button>
      </p>
    </Tab>
    <Tab label={<span>Tab #01</span>}>
      <h3>#02</h3>
      <p>
        Lorem ipsum dolor sit amet, sadipscing consequuntur mea ad, id his
        graeci euismod, mea in harum assueverit. Mea ad facer audire splendide,
        in iisque eruditi antiopam pro, te qui mundi hendrerit. No ridens everti
        ullamcorper his, nec eu aliquip malorum.
      </p>
    </Tab>
    <Tab label="Tab #03">
      <h3>#03</h3>
      <p>
        Lorem ipsum dolor sit amet, id sea populo nostrud argumentum, animal
        aeterno facilisis sed ex. Eu sale denique mei, at mel ullum phaedrum
        interesset, albucius suscipiantur eos et. Idque ridens adolescens no
        cum. Sed atqui nulla cu, dicat platonem mea cu, has no hinc nihil
        veniam. Ullum graeci admodum no quo. Ad praesent facilisis sea.
      </p>
    </Tab>
  </TabContainer>
);
