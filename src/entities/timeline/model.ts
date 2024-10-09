export type Timeline = {
  order: number;
  name: string;
};

export type TimelineItem = {
  id: number | string;
  title: string;
  description: string;
};

const timelineText =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

export const timelines: Timeline[] = [
  {
    order: 1,
    name: 'Timeline 1',
  },
  {
    order: 2,
    name: 'Timeline 2',
  },
  {
    order: 3,
    name: 'Timeline 3',
  },
  {
    order: 4,
    name: 'Timeline 4',
  },
  {
    order: 5,
    name: 'Timeline 5',
  },
  {
    order: 6,
    name: 'Timeline 6',
  },
];

export const getTimelineItems = (timelineOrder: number): TimelineItem[] => {
  return Array(10)
    .fill(null)
    .map((_, i) => ({
      id: 10 * timelineOrder + i,
      title: `${1900 + 10 * timelineOrder + i}`,
      description: timelineText,
    }));
};
