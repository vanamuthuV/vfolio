import React, { useState } from "react";
import EducationSection from "../utils/Education";
import ExperienceSection from "../utils/Experience";
import ProjectsSection from "../utils/Project";

const AllTimelines: React.FC = () => {
  const [current, setCurrent] = useState<"Projects" | "Work" | "Education">(
    "Projects"
  );

  return (
    <div className="p-5">
      <div className="flex gap-2 border-2 border-black p-1 mb-5 bg-[#d3d3d3]">
        {["Projects", "Work", "Education"].map((group) => (
          <button
            key={group}
            onClick={() => setCurrent(group as any)}
            className={`flex-1 font-bold py-1 ${
              current === group ? "bg-black text-white" : "bg-transparent"
            }`}
          >
            {group}
          </button>
        ))}
      </div>

      <div className="h-150 overflow-scroll">
        {current === "Projects" && <ProjectsSection />}
        {current === "Work" && <ExperienceSection />}
        {current === "Education" && <EducationSection />}
      </div>
    </div>
  );
};

export default AllTimelines;
