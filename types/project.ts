export type ProjectCategoryId =
  | "web-mobile"
  | "ai-ml"
  | "ai-ecommerce"
  | "data-science"
  | "robotics-embedded"
  | "cybersecurity-cloud"
  | "software-engineering"
  | "desktop";

export interface Project {
  id: string;
  title: string;
  description: string;
  category: ProjectCategoryId;
  label: string;
  year?: string;
  startDate?: string;
  endDate?: string;
  technologies: string[];
  caseStudyKey?: string;
  githubUrl?: string;
  liveUrl?: string;
  // ISO date used for chronological sorting
  sortDate: string;
}

export interface ProjectCategoryData {
  id: ProjectCategoryId;
  title: string;
  description: string;
}