import type { Project, ProjectCategoryData } from "@/types/project";
import ProjectCard from "./ProjectCard";

interface ProjectCategoryProps {
  category: ProjectCategoryData;
  projects: Project[];
  onOpenProject: (key: string) => void;
}

export default function ProjectCategory({
  category,
  projects,
  onOpenProject,
}: ProjectCategoryProps) {
  if (projects.length === 0) {
    return null;
  }

  return (
    <section
      id={`category-${category.id}`}
      aria-labelledby={`heading-${category.id}`}
      className="scroll-mt-24"
    >
      <div className="mb-7">
        <h3
          id={`heading-${category.id}`}
          className="font-heading text-2xl font-bold text-[#111747] sm:text-3xl"
        >
          {category.title}

          <span className="ml-3 align-middle font-mono text-sm font-normal text-[#8A80B8]">
            {String(projects.length).padStart(2, "0")}
          </span>
        </h3>

        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-[#515578] sm:text-base">
          {category.description}
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            onOpenProject={onOpenProject}
          />
        ))}
      </div>
    </section>
  );
}