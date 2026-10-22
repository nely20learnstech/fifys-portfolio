export const projects = {
  mada: {
    title: "MADA-Digital Platform",
    tag: "Master's Thesis Project (2025)",
    description: "A digital management platform developed as part of my Master's thesis at ENI University of Fianarantsoa. The system streamlines organizational workflows including payroll calculation, leave management, and interactive calendars.",
    tech: ["Django", "Django REST Framework", "MySQL", "React", "TypeScript", "Expo", "Docker", "Nginx", "Redis", "Celery"],
    details: "Designed and engineered the complete backend architecture with Django and DRF, implementing secure asynchronous task queues using Celery and Redis. Developed responsive frontend user interfaces with React and TypeScript, alongside mobile integration via Expo."
  },
  robotics: {
    title: "AI-Powered Robotic Arm & YOLO Detection",
    tag: "Robotics & Computer Vision",
    description: "An autonomous robotics integration project combining a robotic arm with computer vision models for precise object detection and automated sorting.",
    tech: ["Python", "YOLO", "Computer Vision", "Hardware Integration"],
    details: "Integrated YOLO computer vision models to process video feeds, detect objects in real time with bounding boxes, and translate coordinates into precise physical commands for the robotic arm."
  },
  standards: {
    title: "Software Quality & Maintainability Framework",
    tag: "Professional Practice",
    description: "Professional work focusing on establishing software development standards, code quality metrics, rigorous testing protocols, and maintainability best practices.",
    tech: ["Clean Code", "Testing Standards", "CI/CD Protocols"],
    details: "Established comprehensive checklists and guidelines for secure code reviews, reducing technical debt and ensuring high reliability across enterprise software systems."
  },
  secure: {
    title: "Secure AI-Assisted Coding Workflows",
    tag: "Shift-Left Security",
    description: "Exploration of secure-by-design principles when leveraging AI-assisted development tools, integrating automated vulnerability scanning and policy alignment.",
    tech: ["Security-by-Design", "Vulnerability Scanning", "AI Assistants"],
    details: "Developed guidelines for embedding security checks directly into the development lifecycle, ensuring AI-generated code snippets adhere strictly to organizational security policies."
  }
} as const;

export const articles = {
  "secure-ai": {
    category: "Secure AI Development",
    title: "Shifting Security Left in the Age of AI Code Generation",
    date: "October 2026",
    readTime: "4 min read",
    paragraphs: [
      "As AI-assisted coding tools become a standard part of the developer workflow, the speed of code generation has accelerated dramatically. However, speed without embedded security creates vulnerabilities further down the line.",
      "By 'shifting security left'—embedding vulnerability scans, secret detection, and dependency checks directly into the generation and commit phases—we catch flaws at the source where they are significantly cheaper and faster to fix.",
      "Responsible AI engineering requires continuous alignment between automated coding outputs and robust security policies."
    ]
  },
  architecture: {
    category: "Software Architecture",
    title: "Lessons from Building Scalable Systems in Enterprise Environments",
    date: "September 2026",
    readTime: "5 min read",
    paragraphs: [
      "Building software in the banking sector demands rigorous standards for reliability, data integrity, and security. Through developing platforms like MADA-Digital and enterprise banking systems, I've learned that architectural simplicity and robust error handling are paramount.",
      "Clean separation of concerns between backend APIs, asynchronous workers (Celery/Redis), and reactive frontends ensures long-term maintainability.",
      "Engineering with intelligence starts with understanding the real-world constraints of the systems we serve."
    ]
  }
} as const;

export type ProjectKey = keyof typeof projects;
export type ArticleKey = keyof typeof articles;
