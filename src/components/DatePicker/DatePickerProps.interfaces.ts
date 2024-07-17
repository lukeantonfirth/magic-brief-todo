import { DateValue } from 'react-aria-components';
import { IAdditionalClassNames, IIdentifier } from '@/interfaces';

export interface AriaDatePickerProps
  extends IAdditionalClassNames,
    IIdentifier {
  onDateChange: (date: DateValue) => void;
}
