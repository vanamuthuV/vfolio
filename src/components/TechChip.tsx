import type { Technology } from "../types/technologies"

const TechChip = (payload : Technology) => {

    return (
      <a
        href={payload.websiteuri}
        target="_blank"
        className="flex flex-row items-center gap-1 rounded-[10px] px-1 py-1 bg-[var(--color-muted)] text-black hover:bg-[var(--color-primaryone)] hover:text-white hover:underline min-w-70"
      >
        <div className="bg-[var(--color-light-bg)] border-2 border-[var(--color-primaryone)] rounded-[6px] p-[0.2rem] flex items-center justify-center">
          <img
            src={payload.imageuri}
            alt={`${payload.name} logo`}
            className="h-5 w-5"
          />
        </div>
        <span className="whitespace-nowrap overflow-hidden text-ellipsis font-semibold">
          {payload.name}
        </span>
      </a>
    );


}

export default TechChip