"use client";

import { useState } from "react";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ToolboxSection from "@/components/ToolboxSection";
import ProjectsSection from "@/components/ProjectsSection";
import ExperienceSection from "@/components/ExperienceSection";
import CommunitySection from "@/components/CommunitySection";
import EducationSection from "@/components/EducationSection";
import WritingSection from "@/components/WritingSection";
import ContactSection from "@/components/ContactSection";
import ContentModal from "@/components/ContentModal";
import type { ArticleKey, ProjectKey } from "@/data/portfolio";

export default function HomePage() {
  const [activeProject, setActiveProject] = useState<ProjectKey | null>(null);
  const [activeArticle, setActiveArticle] = useState<ArticleKey | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const handleContactSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    event.currentTarget.reset();
    setSubmitted(true);
    window.setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <>
      <SiteHeader />
      <main>
        <HeroSection />
        <AboutSection />
        <ToolboxSection />
        <ProjectsSection onOpenProject={(key) => setActiveProject(key as ProjectKey)} />
        <ExperienceSection />
        <CommunitySection />
        <EducationSection />
        <WritingSection onOpenArticle={(key) => setActiveArticle(key as ArticleKey)} />
        <ContactSection handleContactSubmit={handleContactSubmit} submitted={submitted} />
      </main>
      <SiteFooter />

      {activeProject && (
        <ContentModal
          kind="project"
          itemKey={activeProject}
          onClose={() => setActiveProject(null)}
        />
      )}
      {activeArticle && (
        <ContentModal
          kind="article"
          itemKey={activeArticle}
          onClose={() => setActiveArticle(null)}
        />
      )}
    </>
  );
}
