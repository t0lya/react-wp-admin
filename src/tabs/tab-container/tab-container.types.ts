import { ReactElement } from 'react';

import { TabProps } from '../tab/tab.types';

export interface TabContainerProps {
  children: ReactElement<TabProps> | ReactElement<TabProps>[];
}
