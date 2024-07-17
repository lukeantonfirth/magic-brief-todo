import React from 'react';
import cx from 'classnames';

import { ButtonIconOnlyProps } from './ButtonIconOnly.interfaces';
import {
  BUTTON_BG_COLOR_TYPE_MAP,
  BUTTON_TEXT_COLOR_TYPE_MAP,
  ICON_TYPE_MAP,
} from './ButtonIconOnly.constants';

const ButtonIconOnly = ({
  additionalClassNames,
  backgroundColor = 'blue',
  icon = 'plus',
  label: buttonLabel,
  onClick,
  textColor = 'white',
  type = 'button',
}: ButtonIconOnlyProps) => {
  const Icon = ICON_TYPE_MAP[icon];

  return (
    <button
      className={cx(
        'p-2',
        'rounded-sm',
        BUTTON_TEXT_COLOR_TYPE_MAP[textColor],
        BUTTON_BG_COLOR_TYPE_MAP[backgroundColor],
        additionalClassNames,
      )}
      type={type}
      onClick={onClick}>
      <Icon />
      <label className="sr-only">{buttonLabel}</label>
    </button>
  );
};

export { ButtonIconOnly };
