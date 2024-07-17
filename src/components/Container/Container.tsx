import React from 'react';
import cx from 'classnames';

import { ContainerProps } from './Container.interfaces';

export const Container = ({ children }: ContainerProps) => {
  return (
    <div
      className={cx(
        'h-screen',
        'flex',
        'flex-col',
        'justify-center',
        'items-center',
        'bg-slate-50',
      )}>
      {children}
    </div>
  );
};
