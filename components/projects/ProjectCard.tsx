import { projects } from "@/data/projects";
import type { Project } from "@/types/project";

interface ProjectCardProps {
  project: Project;
  onOpenProject: (key: string) => void;
}

export default function ProjectCard({
  project,
  onOpenProject,
}: ProjectCardProps) {

  

  return (
    <article className="group flex h-full flex-col justify-between rounded-3xl border border-[#DCD3FF] bg-white p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-hover sm:p-8">
      <div>
        <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
          <span className="rounded-full bg-[#F0EEFF] px-3 py-1 font-mono text-xs font-bold text-[#5B2CCB]">
            {project.label}
          </span>

          {project.year && (
            <span className="font-mono text-xs text-[#515578]">
              {project.year}
            </span>
          )}

          {project.startDate && (
            <span className="font-mono text-xs text-[#515578]">
              {project.startDate} — {project.endDate ?? "Present"}
            </span>
          )}


        </div>

        <h3 className="mb-3 font-heading text-xl font-bold text-[#111747] transition-colors group-hover:text-[#5B2CCB] sm:text-2xl">
          {project.title}
        </h3>

        <p className="mb-6 text-sm leading-relaxed text-[#515578]">
          {project.description}
        </p>

        <ul
          className="mb-6 flex flex-wrap gap-2"
          aria-label="Technologies used"
        >
          {project.technologies.map((technology) => (
            <li
              key={technology}
              className="rounded-md border border-[#DCD3FF] bg-[#FAFAFF] px-2.5 py-1 text-xs text-[#3520A8]"
            >
              {technology}
            </li>
          ))}
        </ul>
      </div>

      <div className="flex items-center justify-between gap-4 border-t border-[#F0EEFF] pt-5">
        {project.caseStudyKey ? (
          <button
            type="button"
            onClick={() => onOpenProject(project.caseStudyKey!)}
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#5B2CCB] transition-all hover:gap-3"
          >
            View case study
            <i
              aria-hidden="true"
              className="fa-solid fa-arrow-right text-xs"
            />
          </button>
        ) : (
          <span className="text-sm text-[#515578]">Project overview</span>
        )}

        <div className="flex items-center gap-4">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${project.title} on GitHub`}
              className="text-[#515578] transition-colors hover:text-[#5B2CCB]"
            >
              <i className="fa-brands fa-github text-lg" aria-hidden="true" />
            </a>
          )}

          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visit ${project.title} live demo`}
              className="text-[#515578] transition-colors hover:text-[#5B2CCB]"
            >
              <i
                className="fa-solid fa-arrow-up-right-from-square text-sm"
                aria-hidden="true"
              />
            </a>
          )}
        </div>
      </div>
    </article>
  );
}