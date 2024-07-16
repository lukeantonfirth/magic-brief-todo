import { DateValue } from 'react-aria-components';

export const formatDatePickerDate = (date: DateValue) => {
  const dateData = new Date(date.year, date.month - 1, date.day);

  return new Intl.DateTimeFormat('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(dateData);
};
