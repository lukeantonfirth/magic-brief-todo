import React from 'react';
import cx from 'classnames';

import { HeaderProps } from './Header.interfaces';

export const Header = ({
  title,
  listLength,
  onDeleteAllTasks,
}: HeaderProps) => {
  return (
    <header
      className={cx(
        'flex',
        'flex-row',
        'items-center',
        'justify-between',
        'p-3',
        'border-b',
        'border-slate-200',
      )}
      role="banner">
      <div className={cx('flex', 'flex-row', 'items-center')}>
        <h1
          className={cx(
            'text-base',
            'font-medium',
            'tracking-wide',
            'text-gray-900',
            'mr-2',
          )}>
          {title}
        </h1>
        <span
          className={cx(
            'h-4',
            'w-4',
            'p-2.5',
            'bg-gray-300',
            'text-black',
            'flex',
            'items-center',
            'justify-center',
            'rounded-full',
            'text-xs',
          )}
          aria-label={`${listLength} tasks`}>
          {listLength}
        </span>
      </div>
      <button
        className={cx(
          'text-sm',
          'font-medium',
          'text-gray-600',
          'underline',
        )}
        type="button"
        onClick={onDeleteAllTasks}
        aria-label="Clear all tasks">
        Clear all
      </button>
    </header>
  );
};
