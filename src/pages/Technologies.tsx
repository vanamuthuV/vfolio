import TechChip from "../components/TechChip";
import { TechnologiesData } from "../constants/Technologies";
import type { Technology } from "../types/technologies";

const Technologies = () => {
  return (
    <div className="p-5 bg-gray-100 pb-5">
      <p className="text-3xl font-bold py-5">Technologies</p>
      <div className="flex flex-wrap gap-5">
        {TechnologiesData.map((tech: Technology) => {
          return (
            <div>
              <TechChip
                id={tech.id}
                imageuri={tech.imageuri}
                name={tech.name}
                websiteuri={tech.websiteuri}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Technologies;
