import React from "react";
import Timeline from "../components/Timeline";
import type { TimelineItem } from "../components/Timeline";

const experienceData: TimelineItem[] = [
  {
    date: "Jun' 2025 - Present",
    content: (
      <div className="bg-primary text-white md:p-4 p-2 rounded-md shadow">
        <h3 className="uppercase md:font-bold font-semibold text-sm md:text-base">
          Airbus
        </h3>
        <p className="text-xs md:text-base">Software Engineer Intern</p>
      </div>
    ),
  },
  {
    date: "Nov' 2024 - Feb' 2025",
    content: (
      <div className="bg-primary text-white md:p-4 p-2 rounded-md shadow">
        <h3 className="uppercase md:font-bold font-semibold text-sm md:text-base">
          Whiteboard Technologies
        </h3>
        <p className="text-xs md:text-base">Software Development Intern</p>
      </div>
    ),
  },
];

const ExperienceSection: React.FC = () => <Timeline items={experienceData} />;

export default ExperienceSection;
