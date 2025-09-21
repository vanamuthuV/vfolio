import React from "react";
import Timeline from "../components/Timeline";
import type { TimelineItem } from "../components/Timeline";

const educationData: TimelineItem[] = [
  {
    date: "May' 2019 - Jun' 2021",
    content: (
      <div className="bg-primary p-4 rounded-md shadow">
        <h3 className="uppercase font-bold text-white">
          Department of Pre-University Education Karnataka
        </h3>
        <p className="text-white">PCMB</p>
      </div>
    ),
  },
  {
    date: "Nov' 2021 - Sep' 2025",
    content: (
      <div className="bg-primary p-4 rounded-md shadow">
        <h3 className="uppercase font-bold text-white">
          Visvesvaraya Technological University
        </h3>
        <p className="text-white">BE CS</p>
      </div>
    ),
  },
];

const EducationSection: React.FC = () => <Timeline items={educationData} />;

export default EducationSection;
