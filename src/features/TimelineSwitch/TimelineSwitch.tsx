import React, { memo } from 'react';

import { createClsModuleScope } from '@/shared/lib/classnames';
import * as style from './TimelineSwitch.module.scss';

import ArrowButton from '@/shared/ui/ArrowButton/ArrowButton';

const cls = createClsModuleScope(style);

type Props = {
  current: number;
  total: number;
  setCurrent: React.Dispatch<React.SetStateAction<number>>;
};

const TimelineSwitch = ({ current, total, setCurrent }: Props) => {
  return (
    <div className={cls('timeline-switch')}>
      <span>
        {String(current).padStart(2, '0')} / {String(total).padStart(2, '0')}
      </span>
      <div className={cls('timeline-switch__controls')}>
        <ArrowButton
          disabled={current === 1}
          onClick={() => setCurrent((prev) => Math.max(prev - 1, 1))}
        />
        <ArrowButton
          dir="right"
          disabled={current === total}
          onClick={() => setCurrent((prev) => Math.min(prev + 1, total))}
        />
      </div>
    </div>
  );
};

export default memo(TimelineSwitch);
