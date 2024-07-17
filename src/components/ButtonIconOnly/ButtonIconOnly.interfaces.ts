import { ButtonHTMLAttributes } from 'react';

import {
  IAdditionalClassNames,
  IBgColor,
  ITextColor,
} from '@/interfaces';
import { IconTypes } from '@/types';

export interface ButtonIconOnlyProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    IAdditionalClassNames,
    IBgColor,
    ITextColor {
  icon?: IconTypes;
}
