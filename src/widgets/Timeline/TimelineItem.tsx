import React from 'react';

import { createClsModuleScope } from '@/shared/lib/classnames';
import * as style from './Timeline.module.scss';

export type TimelineItemProps = {
  title: string;
  description: string;
};

const cls = createClsModuleScope(style);

const TimelineItem = ({ title, description }: TimelineItemProps) => {
  return (
    <div className={cls('timeline-item')}>
      <h5 className={cls('timeline-item__title')}>{title}</h5>
      <p className={cls('timeline-item__description')}>{description}</p>
    </div>
  );
};

export default TimelineItem;
