import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';

import { createClsModuleScope } from '@/shared/lib/classnames';
import * as style from './TimelinePicker.module.scss';

import TimelinePickerItem from './TimelinePickerItem';

import { TimelineLimits } from '@/shared/ui/TimelineLimits';
import { Timeline } from '@/entities/timeline/model';
import { animationDuration } from '@/shared/lib/animations';

const cls = createClsModuleScope(style);

type Props = {
  active: number;
  setActive: React.Dispatch<React.SetStateAction<number>>;
  timelines: Timeline[];
  timelineFrom: number | string;
  timelineTo: number | string;
};

const TimelinePicker = ({
  active,
  setActive,
  timelines,
  timelineFrom,
  timelineTo,
}: Props) => {
  const timelineCircle = useRef();
  const timelineItems = useRef([]);

  useLayoutEffect(() => {
    // На сколько градусов по часовой стрелке будет смещен активный элемент относительно точки 0 + Pi * n
    const angleOffset = -60;
    const rotation = -(360 / timelines.length) * (active - 1) + angleOffset;

    const ctx = gsap.context(() => {
      gsap.to(timelineCircle.current, {
        rotation: rotation,
        duration: animationDuration,
        ease: 'power1.inOut',
        transformOrigin: 'center center',
      });

      timelineItems.current.forEach((_, idx) => {
        const buttonAngle = (360 / timelines.length) * idx + rotation;
        gsap.to(timelineItems.current[idx], {
          rotation: -buttonAngle,
          duration: 1,
          ease: 'sine.inOut',
          transformOrigin: 'center center',
        });
      });
    });

    return () => {
      ctx.revert();
    };
  }, [active, timelines.length]);

  return (
    <div className={cls('timeline-picker')}>
      <TimelineLimits from={timelineFrom} to={timelineTo} />
      <div className={cls('timeline-picker__circle')} ref={timelineCircle}>
        {timelines.map((timeline, idx) => (
          <TimelinePickerItem
            ref={(el) => (timelineItems.current[idx] = el)}
            order={timeline.order}
            itemCount={timelines.length}
            active={active === timeline.order}
            setActive={setActive}
            title={timeline.name}
            key={timeline.order}
          />
        ))}
      </div>
    </div>
  );
};

// NOTE: нет смысла использовать memo, т.к. пропсы часто меняются
export default TimelinePicker;
