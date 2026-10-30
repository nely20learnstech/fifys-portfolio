"use client";

import { useMemo, useState } from "react";
import { projects } from "@/data/projects";
/* import { projectCategories } from "../../data/projectCategories";
 */import type { ProjectCategoryId } from "@/types/project";
import ProjectCategory from "./ProjectCategory";
import { projectCategories } from "@/types/projectCategories";

interface ProjectsSectionProps {
  onOpenProject: (key: string) => void;
}

export default function ProjectsSection({
  onOpenProject,
}: ProjectsSectionProps) {
  const [activeCategory, setActiveCategory] =
    useState<ProjectCategoryId | "all">("all");

    const sortedProjects = [...projects].sort(
  (a, b) =>
    new Date(b.sortDate).getTime() -
    new Date(a.sortDate).getTime()
);

  const visibleCategories = useMemo(() => {
    return projectCategories
      .map((category) => ({
        category,
        projects: sortedProjects.filter(
          (project) => project.category === category.id
        ),
      }))
      .filter(({ category, projects: categoryProjects }) => {
        const hasProjects = categoryProjects.length > 0;
        const matchesFilter =
          activeCategory === "all" || category.id === activeCategory;

        return hasProjects && matchesFilter;
      });
  }, [activeCategory]);

  return (
    <section
      id="projects"
      className="border-y border-[#DCD3FF]/40 bg-[#F0EEFF]/50 py-24 md:py-32"
    >
      <div className="mx-auto max-w-7xl px-6">
        {/* Section introduction */}
        <div className="mb-12 max-w-3xl">
          <span className="mb-3 block text-xs font-semibold uppercase tracking-[0.2em] text-[#5B2CCB]">
            Portfolio & Research
          </span>

          <h2 className="font-heading text-4xl font-extrabold tracking-tight text-[#111747] sm:text-5xl">
            Things I&apos;ve built.
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-relaxed text-[#515578] sm:text-lg">
            From web applications to intelligent systems, explore the projects
            that reflect my curiosity and approach to engineering.
          </p>
        </div>

        {/* Category filters */}
        <div
          className="mb-14 flex flex-wrap gap-3"
          role="group"
          aria-label="Filter projects by category"
        >
          <button
            type="button"
            onClick={() => setActiveCategory("all")}
            aria-pressed={activeCategory === "all"}
            className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
              activeCategory === "all"
                ? "border-[#5B2CCB] bg-[#5B2CCB] text-white"
                : "border-[#DCD3FF] bg-white text-[#515578] hover:border-[#5B2CCB] hover:text-[#5B2CCB]"
            }`}
          >
            All projects
          </button>

          {projectCategories.map((category) => {
            const count = projects.filter(
              (project) => project.category === category.id
            ).length;

            if (count === 0) {
              return null;
            }

            const isActive = activeCategory === category.id;

            return (
              <button
                key={category.id}
                type="button"
                onClick={() => setActiveCategory(category.id)}
                aria-pressed={isActive}
                className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
                  isActive
                    ? "border-[#5B2CCB] bg-[#5B2CCB] text-white"
                    : "border-[#DCD3FF] bg-white text-[#515578] hover:border-[#5B2CCB] hover:text-[#5B2CCB]"
                }`}
              >
                {category.title}
                <span className="ml-2 text-xs opacity-75">{count}</span>
              </button>
            );
          })}
        </div>

        {/* Project listings */}
        <div className="space-y-20">
          {visibleCategories.map(({ category, projects: categoryProjects }) => (
            <ProjectCategory
              key={category.id}
              category={category}
              projects={categoryProjects}
              onOpenProject={onOpenProject}
            />
          ))}
        </div>
      </div>
    </section>
  );
}