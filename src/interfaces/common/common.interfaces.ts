import { ReactNode } from 'react';
import { ColorType } from '@/types';

/**
 * Specify additional classnames to be added to the element
 */
export interface IAdditionalClassNames {
  additionalClassNames?: string;
}

/**
 * The children to be passed into the component
 */
export interface IReactChildren {
  children: ReactNode;
}

/**
 * Specify the background color of the element
 */
export interface IBgColor {
  backgroundColor?: ColorType;
}

/**
 * Specify the text color of the element
 */
export interface ITextColor {
  textColor?: ColorType;
}

/**
 * Specify the identifier of the element
 */
export interface IIdentifier {
  id?: string;
}

/**
 * Specify a label that is associated with the button or input
 */
export interface ILabel {
  label: string;
}
