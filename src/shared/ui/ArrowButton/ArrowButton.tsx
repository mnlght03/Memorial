import React from 'react';

import * as style from './ArrowButton.module.scss';
import { createClsModuleScope } from '@/shared/lib/classnames';

import IconChevron from '@/shared/assets/icons/chevron-left.svg';

const cls = createClsModuleScope(style);

type Props = {
  dir?: 'left' | 'right';
  disabled?: boolean;
  onClick?: () => unknown;
  classMods?: any;
  shadow?: boolean;
  variant?: 'primary' | 'swiper';
};

const ArrowButton = ({
  dir = 'left',
  disabled = false,
  onClick,
  variant = 'primary',
  classMods,
}: Props) => {
  return (
    <button
      className={cls('arrow-button', `arrow-button--${dir}`, classMods, {
        'arrow-button--swiper': variant === 'swiper',
      })}
      disabled={disabled}
      onClick={onClick}
    >
      <IconChevron className={cls('arrow-button__icon')} />
    </button>
  );
};

export default ArrowButton;
