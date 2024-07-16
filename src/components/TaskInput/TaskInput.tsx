import React from 'react';

import cx from 'classnames';
import { DatePicker } from '../DatePicker';
import { TaskInputProps } from './TaskInput.interfaces';

export const TaskInput = ({
  value,
  onChange,
  submit,
  onDateChange,
}: TaskInputProps) => {
  return (
    <div
      className={cx(
        'bg-white',
        'w-5/6',
        'md:w-4/6',
        'lg:w-3/6',
        'xl:w-2/6',
        'rounded-lg',
        'drop-shadow-md',
        'mt-4',
      )}>
      <div className="relative flex items-center">
        <input
          className={cx(
            'w-full',
            'py-4',
            'pl-3',
            'pr-16',
            'text-sm',
            'rounded-lg',
          )}
          type="text"
          placeholder="Change my briefs..."
          onChange={onChange}
          value={value}
        />
        <DatePicker
          onDateChange={onDateChange}
          additionalClassNames={cx('right-16')}
        />
        <button
          className={cx(
            'absolute',
            'p-2',
            'text-white',
            'bg-blue-400',
            'rounded-full',
            'top-1/2',
            'right-4',
            'transform',
            '-translate-y-1/2',
          )}
          type="button"
          onClick={submit}>
          <svg
            className="w-4 h-4"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 6v6m0 0v6m0-6h6m-6 0H6"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};
