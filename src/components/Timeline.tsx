import React from "react";

export type TimelineItem = {
  date: string;
  content?: React.ReactNode;
};

type Props = {
  items: TimelineItem[];
};

const Timeline: React.FC<Props> = ({ items }) => {
  return (
    <div className="flex flex-col gap-4 w-full">
      {items.map((item, index) => (
        <div key={index} className="flex items-start gap-4">
          <div className="w-[120px] text-sm font-bold">{item.date}</div>

          <div className="flex-1">{item.content}</div>
        </div>
      ))}
    </div>
  );
};

export default Timeline;
