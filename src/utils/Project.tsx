import React from "react";
import Timeline from "../components/Timeline";
import type { TimelineItem } from "../components/Timeline";
import Carousel from "../components/Carousal";
import { Project } from "../constants/Project";

const ProjectsSection: React.FC = () => {
  const timelineItems: TimelineItem[] = Project.map((project) => ({
    date: project.date || "",
    content: (
      <div className="flex flex-col md:flex-row gap-6 md:p-6 p-2 rounded-md shadow">
        <div className="flex-shrink-0 w-full md:w-80">
          <Carousel images={project.img} time={200} />
        </div>

        <div className="flex-1 flex flex-col md:gap-4 gap-2">
          <h3
            className={`md:text-2xl md:font-bold font-semibold ${
              project.isdiscontinued ? "text-red-500" : "text-[#584c77]"
            }`}
          >
            {project.name}
          </h3>
          <p className="text-[#333] text-xs md:text-base">{project.description}</p>

          <div className="flex flex-wrap gap-2 mt-2">
            {project.techstack?.map((tech, idx) => (
              <span
                key={idx}
                className="bg-[#d3d3d3] text-[#666] md:text-sm text-[9px] font-semibold md:py-1 py-0.5 px-1.5 md:px-3 rounded-md"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="flex gap-4 mt-4 flex-wrap">
            {project.isBackend ? (
              // <button
              //   className={`bg-[#584c77] flex items-center text-xs md:text-base justify-center text-white md:px-4 px-2  py-0.5 md:py-1 font-bold rounded-md hover:bg-[#47325c] shadow ${
              //     project.dockerimage === null
              //       ? "cursor-not-allowed"
              //       : "cursor-pointer"
              //   }`}
              //   onClick={() =>
              //     project.dockerimage &&
              //     window.open(
              //       project.dockerimage,
              //       "_blank",
              //       "noopener,noreferrer"
              //     )
              //   }
              //   disabled={project.dockerimage === null}
              // >
              //   <svg
              //     xmlns="http://www.w3.org/2000/svg"
              //     width="18"
              //     height="18"
              //     viewBox="0 0 24 24"
              //     fill="none"
              //     stroke="currentColor"
              //     stroke-width="2"
              //     stroke-linecap="round"
              //     stroke-linejoin="round"
              //     className="lucide lucide-container-icon lucide-container"
              //   >
              //     <path d="M22 7.7c0-.6-.4-1.2-.8-1.5l-6.3-3.9a1.72 1.72 0 0 0-1.7 0l-10.3 6c-.5.2-.9.8-.9 1.4v6.6c0 .5.4 1.2.8 1.5l6.3 3.9a1.72 1.72 0 0 0 1.7 0l10.3-6c.5-.3.9-1 .9-1.5Z" />
              //     <path d="M10 21.9V14L2.1 9.1" />
              //     <path d="m10 14 11.9-6.9" />
              //     <path d="M14 19.8v-8.1" />
              //     <path d="M18 17.5V9.4" />
              //   </svg>
              //   <span className="md:pl-2 pl-1">DOCKER IMAGE</span>
              // </button>
              null
            ) : (
              <a href={project.link} target="_blank">
                <button
                  className={`bg-[#584c77] flex items-center text-xs md:text-base justify-center text-white md:px-4 px-2 py-0.5 md:py-1 font-bold rounded-md hover:bg-[#47325c] shadow ${[
                    project.link !== null
                      ? "cursor-pointer"
                      : "cursor-not-allowed",
                  ]}`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="lucide lucide-radio-tower-icon lucide-radio-tower"
                  >
                    <path d="M4.9 16.1C1 12.2 1 5.8 4.9 1.9" />
                    <path d="M7.8 4.7a6.14 6.14 0 0 0-.8 7.5" />
                    <circle cx="12" cy="9" r="2" />
                    <path d="M16.2 4.8c2 2 2.26 5.11.8 7.47" />
                    <path d="M19.1 1.9a9.96 9.96 0 0 1 0 14.1" />
                    <path d="M9.5 18h5" />
                    <path d="m8 22 4-11 4 11" />
                  </svg>
                  <span className="md:pl-2 pl-1">LIVE DEMO</span>
                </button>
              </a>
            )}

            {project.private ? (
              <button
                className={`bg-[#f6f8fa] flex text-xs md:text-base items-center justify-center text-[#24292e] border border-red-400 md:px-4 px-2 py-0.5 md:py-1 font-bold rounded-md hover:bg-[#584c77] hover:text-white ${
                  project.private
                    ? "cursor-not-allowed text-red-400"
                    : "cursor-pointer"
                }`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="lucide lucide-github-icon lucide-github"
                >
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                  <path d="M9 18c-4.51 2-5-2-7-2" />
                </svg>
                <span className="md:pl-2 pl-1">PRIVATED</span>
              </button>
            ) : (
              <a href={project.repo} target="_blank" rel="noopener noreferrer">
                <button className="bg-[#f6f8fa] flex items-center justify-center text-[#24292e] border border-[#584c77] md:px-4 px-2 py-0.5 md:py-1 font-bold rounded-md text-xs md:text-base hover:bg-[#584c77] hover:text-white cursor-pointer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="lucide lucide-github-icon lucide-github"
                  >
                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                    <path d="M9 18c-4.51 2-5-2-7-2" />
                  </svg>
                  <span className="md:pl-2 pl-1">VIEW REPO</span>
                </button>
              </a>
            )}
          </div>
        </div>
      </div>
    ),
  }));

  return <Timeline items={timelineItems} />;
};

export default ProjectsSection;
