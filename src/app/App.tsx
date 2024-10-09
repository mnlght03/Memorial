import React, { useEffect, useState } from 'react';

import './style/index.scss';

import Layout from './ui/Layout';
import Title from './ui/Title';
import TimelinePicker from '@/widgets/TimelinePicker/TimelinePicker';
import Timeline from '@/widgets/Timeline/Timeline';
import TimelineSwitch from '@/features/TimelineSwitch/TimelineSwitch';
import {
  getTimelineItems,
  TimelineItem,
  timelines,
} from '@/entities/timeline/model';

const App = () => {
  const [activeTimeline, setActiveTimeline] = useState(1);
  const [timelineItems, setTimelineItems] = useState<TimelineItem[]>();
  const totalTimelines = timelines.length;

  useEffect(() => {
    setTimelineItems(() => getTimelineItems(activeTimeline));
  }, [activeTimeline]);

  return (
    <Layout>
      <Title>Исторические даты</Title>
      {timelineItems && (
        <>
          <TimelinePicker
            active={activeTimeline}
            setActive={setActiveTimeline}
            timelines={timelines}
            timelineFrom={timelineItems.at(0).title}
            timelineTo={timelineItems.at(-1).title}
          />
          <TimelineSwitch
            current={activeTimeline}
            setCurrent={setActiveTimeline}
            total={totalTimelines}
          />
          <Timeline items={timelineItems} />
        </>
      )}
    </Layout>
  );
};

export default App;
