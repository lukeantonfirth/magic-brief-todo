import { IconProps } from '../Icons';

import PlusIcon from '../Icons/PlusIcon';
import TrashIcon from '../Icons/TrashIcon';
import { BGColorTypes, TextColorTypes } from '@/types';

export const ICON_TYPE_MAP: {
  [icon: string]: React.ComponentType<IconProps>;
} = {
  plus: PlusIcon,
  trash: TrashIcon,
} as const;

export const BUTTON_BG_COLOR_TYPE_MAP: {
  [color: string]: BGColorTypes;
} = {
  black: 'bg-black',
  blue: 'bg-blue-300',
  gray: 'bg-gray-300',
  green: 'bg-green-300',
  indigo: 'bg-indigo-300',
  pink: 'bg-pink-300',
  purple: 'bg-purple-300',
  red: 'bg-red-300',
  white: 'bg-white',
  yellow: 'bg-yellow-300',
} as const;

export const BUTTON_TEXT_COLOR_TYPE_MAP: {
  [color: string]: TextColorTypes;
} = {
  black: 'text-black',
  blue: 'text-blue-300',
  gray: 'text-gray-300',
  green: 'text-green-300',
  indigo: 'text-indigo-300',
  pink: 'text-pink-300',
  purple: 'text-purple-300',
  red: 'text-red-300',
  white: 'text-white',
  yellow: 'text-yellow-300',
} as const;
