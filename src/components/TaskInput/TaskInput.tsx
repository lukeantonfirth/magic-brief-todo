import React from 'react';
import cx from 'classnames';

import { TaskInputProps } from './TaskInput.interfaces';

import { ButtonIconOnly, DatePicker } from '@/components';

export const TaskInput = ({
  value,
  onChange,
  onSubmit,
  onDateChange,
}: TaskInputProps) => {
  return (
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
      <ButtonIconOnly
        additionalClassNames={cx(
          'absolute',
          'top-1/2',
          'right-4',
          'transform',
          '-translate-y-1/2',
        )}
        icon="plus"
        onClick={onSubmit}
      />
    </div>
  );
};
