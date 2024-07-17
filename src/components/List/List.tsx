import React from 'react';
import cx from 'classnames';

import { ListProps } from './List.interfaces';

export const List = ({ children, listType = 'ul' }: ListProps) => {
  const ListElement = listType as keyof JSX.IntrinsicElements;
  return (
    <ListElement className={cx('overflow-y-auto', 'h-72')}>
      {children}
    </ListElement>
  );
};
