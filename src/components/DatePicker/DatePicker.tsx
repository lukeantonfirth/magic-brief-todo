import React from 'react';
import cx from 'classnames';

import {
  Button,
  Calendar,
  CalendarCell,
  CalendarGrid,
  DateInput,
  DatePicker,
  DateSegment,
  Dialog,
  Label,
  Group,
  Heading,
  Popover,
} from 'react-aria-components';
import { AriaDatePickerProps } from './DatePickerProps.interfaces';

export const AriaDatePicker = ({
  additionalClassNames,
  id,
  onDateChange,
}: AriaDatePickerProps) => {
  return (
    <DatePicker
      id={id}
      onChange={onDateChange}
      className={cx('absolute', additionalClassNames)}>
      <Group
        className={cx('relative', 'flex', 'items-center', 'gap-4')}>
        <Label>Due Date</Label>
        <DateInput
          className={cx(
            'flex',
            'items-center',
            'gap-4',
            'px-2',
            'py-1',
            'border-2',
            'border-blue-100',
            'rounded-md',
            'focus:border-blue-400',
            'focus:outline-none',
          )}>
          {(segment) => (
            <DateSegment
              key={segment.type}
              segment={segment}
              className={cx('text-sm')}
            />
          )}
        </DateInput>
        <Button
          className={cx(
            'absolute',
            'right-0',
            'left-0',
            'top-0',
            'bottom-0',
          )}
        />
      </Group>
      <Popover
        className={cx(
          'absolute',
          'z-10',
          'mt-2',
          'bg-white',
          'border',
          'rounded-md',
          'shadow-lg',
        )}>
        <Dialog>
          <Calendar>
            <header
              className={cx(
                'flex',
                'items-center',
                'justify-between',
                'px-2',
                'py-1',
                'border-b',
              )}>
              <Button slot="previous">◀</Button>
              <Heading className={cx('text-sm', 'font-medium')} />
              <Button slot="next">▶</Button>
            </header>
            <CalendarGrid className="">
              {(date) => (
                <CalendarCell
                  key={date.toString()}
                  date={date}
                  className={cx('w-8', 'h-8', 'text-center')}
                />
              )}
            </CalendarGrid>
          </Calendar>
        </Dialog>
      </Popover>
    </DatePicker>
  );
};

export { AriaDatePicker as DatePicker };
