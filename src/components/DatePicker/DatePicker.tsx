import React from 'react';
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
import cx from 'classnames';
import { AriaDatePickerProps } from './DatePickerProps.interfaces';

export const AriaDatePicker = ({
  additionalClassNames,
  onDateChange,
}: AriaDatePickerProps) => {
  return (
    <DatePicker
      onChange={onDateChange}
      className={cx('absolute', additionalClassNames)}>
      <Label className="sr-only">Select Due Date</Label>
      <Group className={cx('relative flex items-center')}>
        <DateInput className="flex space-x-1 px-2 py-1 border rounded-md">
          {(segment) => (
            <DateSegment
              key={segment.type}
              segment={segment}
              className="text-sm"
            />
          )}
        </DateInput>
        <Button className="absolute right-0 left-0 top-0 bottom-0" />
      </Group>
      <Popover className="absolute z-10 mt-2 bg-white border rounded-md shadow-lg !left-[905px]">
        <Dialog>
          <Calendar>
            <header className="flex items-center justify-between px-2 py-1 border-b">
              <Button slot="previous">◀</Button>
              <Heading className="text-sm font-medium" />
              <Button slot="next">▶</Button>
            </header>
            <CalendarGrid className="">
              {(date) => (
                <CalendarCell
                  key={date.toString()}
                  date={date}
                  className="w-8 h-8 text-center"
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
