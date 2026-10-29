export type ProjectCategoryId =
  | "web-mobile"
  | "ai-ml"
  | "data-science"
  | "robotics-embedded"
  | "cybersecurity-cloud"
  | "software-engineering";

export interface Project {
  id: string;
  title: string;
  description: string;
  category: ProjectCategoryId;
  label: string;
  year?: string;
  technologies: string[];
  caseStudyKey?: string;
  githubUrl?: string;
  liveUrl?: string;
}

export interface ProjectCategoryData {
  id: ProjectCategoryId;
  title: string;
  description: string;
}