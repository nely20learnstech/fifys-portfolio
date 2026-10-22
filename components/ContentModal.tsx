"use client";

import { useEffect } from "react";
import type { ArticleKey, ProjectKey } from "@/data/portfolio";
import { articles, projects } from "@/data/portfolio";

type ContentModalProps =
  | { kind: "project"; itemKey: ProjectKey; onClose: () => void }
  | { kind: "article"; itemKey: ArticleKey; onClose: () => void };

export default function ContentModal({ kind, itemKey, onClose }: ContentModalProps) {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  const isProject = kind === "project";
  const project = isProject ? projects[itemKey as ProjectKey] : null;
  const article = !isProject ? articles[itemKey as ArticleKey] : null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#111747]/60 p-4 backdrop-blur-sm"
      role="presentation"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
    <section
        role="dialog"
        aria-modal="true"
        aria-label={project?.title ?? article?.title}
        className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-3xl border border-[#DCD3FF] bg-white p-8 shadow-2xl"
      >
    <button
          onClick={onClose}
          className="absolute right-6 top-6 flex h-10 w-10 items-center justify-center rounded-full bg-[#F0EEFF] text-[#111747] transition-colors hover:bg-[#5B2CCB] hover:text-white"
          aria-label="Close modal"
        >
    <i className="fa-solid fa-xmark text-lg" />
    </button>

        {project && (
          <>
    <span className="mb-3 inline-block rounded-full bg-[#F0EEFF] px-3 py-1 font-mono text-xs font-bold text-[#5B2CCB]">
              {project.tag}
            </span>
    <h2 className="mb-3 pr-10 font-heading text-2xl font-bold text-[#111747]">{project.title}</h2>
    <p className="mb-4 text-sm leading-relaxed text-[#515578]">{project.description}</p>
    <div className="mb-6 rounded-2xl border border-[#DCD3FF] bg-[#FAFAFF] p-4">
    <h3 className="mb-2 text-xs font-bold uppercase tracking-wider text-[#111747]">Technical Implementation</h3>
    <p className="text-xs leading-relaxed text-[#515578]">{project.details}</p>
    </div>
    <div className="mb-6 flex flex-wrap gap-2">
              {project.tech.map((technology) => (
                <span key={technology} className="rounded border border-[#DCD3FF] bg-[#F0EEFF] px-2.5 py-1 text-xs font-medium text-[#3520A8]">
                  {technology}
                </span>
              ))}
            </div>
    </>
        )}

        {article && (
          <article>
    <span className="font-mono text-xs font-semibold text-[#5B2CCB]">{article.category}</span>
    <h2 className="mb-3 mt-2 pr-10 font-heading text-2xl font-bold text-[#111747]">{article.title}</h2>
    <p className="mb-5 font-mono text-xs text-[#515578]">{article.date} · {article.readTime}</p>
            {article.paragraphs.map((paragraph) => (
              <p key={paragraph} className="mb-4 text-sm leading-relaxed text-[#515578]">{paragraph}</p>
            ))}
          </article>
        )}

        <div className="mt-8 flex justify-end">
    <button onClick={onClose} className="rounded-full bg-[#5B2CCB] px-6 py-2.5 text-sm font-semibold text-white transition-all hover:bg-[#3520A8]">
            Close
          </button>
    </div>
    </section>
    </div>
  );
}
