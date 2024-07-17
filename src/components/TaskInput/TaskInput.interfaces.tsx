import { DateValue } from 'react-aria-components';

export interface TaskInputProps {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onDateChange: (date: DateValue) => void;
  onSubmit: () => void;
  value: string;
}
