import React from 'react';
import cx from 'classnames';

export const Spinner = () => {
  return (
    <div
      className={cx(
        'flex',
        'items-center',
        'justify-center',
        'min-h-screen',
        'absolute',
        'top-0',
        'left-0',
        'bottom-0',
        'right-0',
        'z-50',
      )}>
      <svg
        className={cx(
          'spinner',
          'w-16',
          'h-16',
          'text-blue-500',
          'animate-spin',
        )}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        role="status"
        aria-label="Loading">
        <circle
          className={cx('opacity-25')}
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="4"></circle>
        <path
          className={cx('opacity-75')}
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
      </svg>
    </div>
  );
};
