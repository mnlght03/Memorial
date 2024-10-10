import React, { memo, useLayoutEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import gsap from 'gsap';

import 'swiper/scss';
import 'swiper/scss/navigation';

import { createClsModuleScope } from '@/shared/lib/classnames';
import * as style from './Timeline.module.scss';

import TimelineItem, { type TimelineItemProps } from './TimelineItem';
import ArrowButton from '@/shared/ui/ArrowButton/ArrowButton';
import { mainAnimationDuration } from '@/shared/lib/animations';

const cls = createClsModuleScope(style);

type Props = {
  items: (TimelineItemProps & { id: string | number })[];
};

const Timeline = ({ items }: Props) => {
  const timelineRef = useRef<HTMLDivElement>();

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(timelineRef.current, {
        opacity: 0,
        duration: mainAnimationDuration,
        y: 100,
      });
    });

    return () => ctx.revert();
  }, [items]);

  return (
    <div className={cls('timeline')} ref={timelineRef}>
      <Swiper
        className={cls('timeline-swiper')}
        slidesPerView={'auto'}
        spaceBetween={80}
        modules={[Navigation]}
        navigation={{
          nextEl: `.${cls('timeline__arrow-button--right')}`,
          prevEl: `.${cls('timeline__arrow-button--left')}`,
        }}
      >
        {items.map((item) => (
          <SwiperSlide key={item.id} className={cls('timeline-swiper__item')}>
            <TimelineItem title={item.title} description={item.description} />
          </SwiperSlide>
        ))}
      </Swiper>

      <ArrowButton
        classMods={cls(
          'timeline__arrow-button',
          'timeline__arrow-button--left',
        )}
        variant="swiper"
      />
      <ArrowButton
        classMods={cls(
          'timeline__arrow-button',
          'timeline__arrow-button--right',
        )}
        variant="swiper"
        dir="right"
      />
    </div>
  );
};

export default memo(Timeline);
