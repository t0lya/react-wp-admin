import React, {
  FunctionComponent,
  isValidElement,
  cloneElement,
  Children,
  useState,
  MouseEvent,
} from 'react';
import cx from 'classnames';

import { TabContainerProps } from './tab-container.types';

const TabContainer: FunctionComponent<TabContainerProps> = ({ children }) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleClick = (e: MouseEvent<HTMLAnchorElement>, index: number) => {
    e.preventDefault();
    setActiveTab(index);
  };

  return (
    <>
      <div className="nav-tab-wrapper">
        {Children.map(children, (tab, index) => {
          return isValidElement(tab)
            ? cloneElement(
                <a
                  onClick={(e) => handleClick(e, index)}
                  className={cx('nav-tab', {
                    'nav-tab-active': activeTab === index,
                  })}
                >
                  {tab.props.label}
                </a>,
              )
            : '';
        })}
      </div>
      <div className="tabs-content">
        {Children.toArray(children).filter((_, index) => {
          return index === activeTab;
        })}
      </div>
    </>
  );
};

export default TabContainer;
