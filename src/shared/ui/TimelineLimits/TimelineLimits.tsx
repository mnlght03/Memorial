import React, { useLayoutEffect, useRef, useState } from 'react';
import gsap from 'gsap';

import { createClsModuleScope } from '@/shared/lib/classnames';
import * as style from './TimelineLimits.module.scss';
import { mainAnimationDuration } from '@/shared/lib/animations';

const cls = createClsModuleScope(style);

type Props = {
  from: number | string;
  to: number | string;
};

const TimelineLimits = ({ from, to }: Props) => {
  const [prevFrom, setPrevFrom] = useState(from);
  const [prevTo, setPrevTo] = useState(to);

  const fromRef = useRef<HTMLDivElement>();
  const toRef = useRef<HTMLDivElement>();

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        fromRef.current,
        {
          textContent: prevFrom,
        },
        {
          textContent: from,
          ease: 'power1.in',
          snap: { textContent: 1 },
          duration: mainAnimationDuration,
          onComplete: () => setPrevFrom(from),
        },
      );

      gsap.fromTo(
        toRef.current,
        {
          textContent: prevTo,
        },
        {
          textContent: to,
          ease: 'power1.in',
          snap: { textContent: 1 },
          duration: mainAnimationDuration,
          onComplete: () => setPrevTo(to),
        },
      );
    });

    return () => ctx.revert();
  }, [from, to, prevFrom, prevTo]);

  return (
    <div className={cls('timeline-limits')}>
      <div className={cls('timeline-limits__from')} ref={fromRef}>
        {from}
      </div>
      <div className={cls('timeline-limits__to')} ref={toRef}>
        {to}
      </div>
    </div>
  );
};

export default TimelineLimits;
