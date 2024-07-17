import React, { memo, useCallback } from 'react';
import cx from 'classnames';

import { ListItemProps } from './ListItem.interfaces';

import { ButtonIconOnly } from '@/components';
import { useDeleteTaskMutation } from '@/hooks';
import { handleConsoleError } from '@/utils';

const ListItem = ({
  item,
  onUpdate,
  onDelete,
  isList = true,
}: ListItemProps) => {
  const { completed, title, dueDate, id } = item;

  const { mutationHandler: deleteTaskMutation } =
    useDeleteTaskMutation({
      onError: (error) =>
        handleConsoleError(`Error deleting task ${error}`),
      onSuccess: (res) => console.log(res),
    });

  const handleOnTaskInputUpdate = useCallback(() => {
    onUpdate(item);
  }, [onUpdate, item]);

  const handleDeleteTask = useCallback(() => {
    onDelete(id);
    deleteTaskMutation({ id });
  }, [deleteTaskMutation, item]);

  const ListItemElement = isList ? 'li' : 'div';

  return (
    <ListItemElement
      className={cx(
        'flex flex-col md:flex-row items-center justify-start',
        'py-3',
        'px-3',
        'border-b',
        { 'list-none': isList },
      )}>
      <input
        type="checkbox"
        className={cx(
          'h-4 w-4',
          'mr-4',
          'rounded',
          'border-gray-300',
        )}
        defaultChecked={completed}
        onChange={handleOnTaskInputUpdate}
        aria-label={`Mark ${title} as ${completed ? 'incomplete' : 'complete'}`}
      />
      <h2
        className={cx(
          'flex-grow',
          'text-sm',
          'tracking-wide',
          'text-gray-600',
        )}>
        {title}
      </h2>
      <div
        className={cx(
          'flex items-center',
          'mx-4', // Add some horizontal margin to center it nicely
          'text-gray-500',
          'text-sm',
        )}>
        <span className="mr-1">due</span>
        <span>{dueDate}</span>
      </div>
      <div className={cx('flex items-center', 'ml-2')}>
        <span
          className={cx(
            'px-2 py-1',
            'rounded',
            'text-xs',
            'font-bold',
            'text-black',
            {
              'bg-green-300': completed,
              'bg-orange-300': !completed,
            },
          )}>
          {completed ? 'COMPLETED' : 'NOT COMPLETED'}
        </span>
        <ButtonIconOnly
          additionalClassNames={cx('ml-4', '!rounded-full')}
          aria-label="Delete task"
          backgroundColor="red"
          icon="trash"
          onClick={handleDeleteTask}
        />
      </div>
    </ListItemElement>
  );
};

const MemoizedListItem = memo(ListItem);

export { MemoizedListItem as ListItem };
