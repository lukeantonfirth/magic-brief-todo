import { DateValue } from 'react-aria-components';
import { IAdditionalClassNames } from '../../../interfaces';

export interface AriaDatePickerProps extends IAdditionalClassNames {
  onDateChange: (date: DateValue) => void;
}
