import React, { memo } from 'react';

import * as style from './TimelinePicker.module.scss';
import { createClsModuleScope } from '@/shared/lib/classnames';

const cls = createClsModuleScope(style);

export type TimelinePickerItemProps = {
  order: number;
  itemCount: number;
  title: string;
  active?: boolean;
  setActive: React.Dispatch<React.SetStateAction<number>>;
};

const TimelinePickerItem = (
  { order, itemCount, title, active, setActive }: TimelinePickerItemProps,
  ref: React.ForwardedRef<HTMLButtonElement>,
) => {
  // NOTE: Вычисления простые и пропсы меняются редко, так что можно обойтись без useMemo
  const rotateDeg = ((order - 1) * 360) / itemCount;
  const dotStyle = {
    transform: `rotate(${rotateDeg}deg) translateX(calc(var(--timeline-circle-size, 530px) / 2))`,
  };

  return (
    <div
      className={cls('timeline-picker-item', {
        'timeline-picker-item--active': active,
      })}
      style={dotStyle}
    >
      <button
        className={cls('timeline-picker-item__wrapper')}
        ref={ref}
        onClick={() => setActive(() => order)}
      >
        <span className={cls('timeline-picker-item__text')}>{order}</span>
        {active && (
          <div className={cls('timeline-picker-item__title')}>{title}</div>
        )}
      </button>
    </div>
  );
};

export default memo(React.forwardRef(TimelinePickerItem));
