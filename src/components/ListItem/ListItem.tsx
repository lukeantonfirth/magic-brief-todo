'use client';
import React, { memo, useCallback } from 'react';
import cx from 'classnames';
import { ListItemProps } from './ListItem.interfaces';

const ListItem = ({
  item,
  onUpdate,
  isList = true,
}: ListItemProps) => {
  const { completed, title } = item;

  const handleChange = useCallback(() => {
    onUpdate(item);
  }, [onUpdate, item]);

  const ListItemElement = isList ? 'li' : 'div';

  return (
    <ListItemElement
      className={cx(
        'flex items-center justify-start', // Layout
        'h-12',
        'px-3',
        'border-b',
        { 'list-none': isList },
      )}>
      <input
        type="checkbox"
        className={cx(
          'mr-4',
          'h-4 w-4',
          'rounded',
          'border-gray-300',
        )}
        defaultChecked={completed}
        onChange={handleChange}
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
      <span
        className={cx(
          'px-2 py-1',
          'rounded',
          'text-white',
          'text-xs',
          'font-bold',
          'ml-2',
          {
            'bg-purple-700': completed,
            'bg-red-700': !completed,
          },
        )}>
        {completed ? 'COMPLETED' : 'NOT COMPLETED'}
      </span>
    </ListItemElement>
  );
};

const MemoizedListItem = memo(ListItem);

export { MemoizedListItem as ListItem };
