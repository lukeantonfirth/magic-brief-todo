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
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit();
  };

  return (
    <form onSubmit={handleSubmit}>
      <fieldset className="w-full relative flex items-center">
        <legend className="sr-only">Add New Task</legend>

        <label htmlFor="task-input" className="sr-only">
          Task
        </label>
        <input
          id="task-input"
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

        <label htmlFor="task-date" className="sr-only">
          Due Date
        </label>
        <DatePicker
          id="task-date"
          onDateChange={onDateChange}
          additionalClassNames={cx('right-16')}
        />

        <ButtonIconOnly
          type="submit"
          additionalClassNames={cx(
            'absolute',
            'top-1/2',
            'right-4',
            'transform',
            '-translate-y-1/2',
          )}
          icon="plus"
        />
      </fieldset>
    </form>
  );
};
