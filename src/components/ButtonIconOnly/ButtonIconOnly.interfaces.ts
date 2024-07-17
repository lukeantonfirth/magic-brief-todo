import { ButtonHTMLAttributes } from 'react';

import {
  IAdditionalClassNames,
  IBgColor,
  ILabel,
  ITextColor,
} from '@/interfaces';
import { IconTypes } from '@/types';

export interface ButtonIconOnlyProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    IAdditionalClassNames,
    IBgColor,
    ILabel,
    ITextColor {
  icon?: IconTypes;
}
