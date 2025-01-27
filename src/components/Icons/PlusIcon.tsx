import React from 'react';
import cx from 'classnames';
import { IconProps } from './Icons.interfaces';

const PlusIcon = ({ height = 'h-4', width = 'w-4' }: IconProps) => {
  return (
    <svg
      className={cx(height, width)}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M12 6v6m0 0v6m0-6h6m-6 0H6"
      />
    </svg>
  );
};

export default PlusIcon;
