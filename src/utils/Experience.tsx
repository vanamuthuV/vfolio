import React from "react";
import Timeline from "../components/Timeline";
import type { TimelineItem } from "../components/Timeline";

const experienceData: TimelineItem[] = [
  {
    date: "Jun' 2025 - Present",
    content: (
      <div className="bg-primary text-white p-4 rounded-md shadow">
        <h3 className="uppercase font-bold">Airbus</h3>
        <p>Software Engineer Intern</p>
      </div>
    ),
  },
  {
    date: "Nov' 2024 - Feb' 2025",
    content: (
      <div className="bg-primary text-white p-4 rounded-md shadow">
        <h3 className="uppercase font-bold">Whiteboard Technologies</h3>
        <p>Software Development Intern</p>
      </div>
    ),
  },
];

const ExperienceSection: React.FC = () => <Timeline items={experienceData} />;

export default ExperienceSection;
