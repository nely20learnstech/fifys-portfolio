import type { Project } from "@/types/project";

export const projects: Project[] = [
  {
    id: "robotic-arm",
    title: "AI-Powered Robotic Arm",
    description:
      "A robotics project combining a robotic arm with YOLO-based computer vision to detect beans and support automated sorting.",
    category: "robotics-embedded",
    label: "Computer Vision",
    technologies: [
      "Python",
      "YOLO",
      "Computer Vision",
      "Hardware Integration",
    ],
    caseStudyKey: "robotics",
  },
  {
    id: "quality-framework",
    title: "Software Quality & Maintainability Framework",
    description:
      "Software engineering standards covering coding conventions, code quality, testing practices, and maintainability for enterprise applications.",
    category: "software-engineering",
    label: "Engineering Standards",
    year: "2026",
    technologies: [
      "Clean Code",
      "Software Testing",
      "Maintainability",
      "Development Standards",
    ],
    caseStudyKey: "standards",
  },
  {
    id: "secure-ai-development",
    title: "Secure AI-Assisted Coding Workflows",
    description:
      "Guidelines for applying security-by-design principles when using AI-assisted development tools, with an emphasis on secure development practices.",
    category: "cybersecurity-cloud",
    label: "Application Security",
    year: "2026",
    technologies: [
      "OWASP",
      "Security-by-Design",
      "AI Assistants",
      "Secure Development",
      "Shift-Left Security",
    ],
    caseStudyKey: "secure",
  },
];