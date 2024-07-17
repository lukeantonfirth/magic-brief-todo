import React from 'react';

import cx from 'classnames';

import { StatusTagProps } from './StatusTag.interfaces';

const StatusTag = ({ isCompleted }: StatusTagProps) => {
  return (
    <span
      className={cx(
        'px-2 py-1',
        'rounded',
        'text-xs',
        'font-bold',
        'text-black',
        {
          'bg-green-300': isCompleted,
          'bg-orange-300': !isCompleted,
        },
      )}>
      {isCompleted ? 'COMPLETED' : 'NOT COMPLETED'}
    </span>
  );
};

export { StatusTag };
