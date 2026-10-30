import type { Project } from "@/types/project";

export const projects: Project[] = [
  {
    id: "fashion-ecommerce",
    title: "Full-Stack AI-Powered Fashion E-Commerce Platform",
    description:
      "A full-stack e-commerce platform for fashion products, integrating AI-driven features such as personalized recommendations, virtual try-on, AI-chatbot, and automated inventory management.",
    category: "ai-ecommerce",
    label: "E-Commerce",
    startDate: "April 2026",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Claude Code",
      "DressCode Dataset",
    ],
    caseStudyKey: "ai-ecommerce",
    sortDate: "2026-04-01",   
  },
  {
    id: "luxury-car-shop",
    title: "Aurum - Luxury Car Shop",
    description:
      "A luxury car showroom website featuring a curated fleet of premium vehicles, category-based filtering, an integrated booking system, and a personalized delivery request process.",
    category: "web-mobile",
    label: "E-Commerce",
    startDate: "February 21, 2026",
    endDate: "April 6, 2026",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Prisma ORM",
    ],
    caseStudyKey: "luxury-car-shop",
    sortDate: "2026-02-21",
  },

  {
    id: "robotic-arm",
    title: "AI-Powered Robotic Arm",
    description:
      "A robotics project combining a robotic arm with YOLO-based computer vision to detect beans and support automated sorting.",
    category: "robotics-embedded",
    label: "Computer Vision",
    startDate: "August 2024",
    technologies: [
      "Python",
      "C++",
      "YOLOv11",
      "Computer Vision",
      "ESP32",
      "Arm Robot Kit",
    ],
    caseStudyKey: "robotics",
    sortDate: "2024-08-01",
  },
  {
    id: "customer-churn-prediction",
    title: "Customer Churn Prediction",
    description:
      "Developed a machine learning model to predict customer attrition using Orange Data Mining and Python, enabling the anticipation of disengagements. The model was trained on a dataset of 10,000 customer records, achieving an accuracy of 85% in predicting churn.",
    category: "ai-ml",
    label: "Machine Learning",
    year: "2024",
    technologies: [
      "Python",
      "Scikit-learn",
      "Pandas",
      "NumPy",
      "Orange Data Mining",
    ],
    caseStudyKey: "churn-prediction",
    sortDate: "2024-01-01",
  },
  {
    id: "hr-microservices-platform",
    title: "Microservices HR Platform for Beneficiary Updates and Email Notifications",
    description:
      "Designed a business process and developed a microservices web application to allow HR to record updates from beneficiaries and notify the insurance company by email.",
    category: "web-mobile",
    label: "Microservices",
    startDate: "April 10",
    endDate: "April 25, 2025",
    technologies: [
      "Django",
      "Python",
      "Graphene",
      "PostgreSQL",
      "UML",
      "BPMN",
      "Agile SCRUM",
      "RabbitMQ",
      "API Gateway",
      "nginx",
    ],
    caseStudyKey: "microservices-bpmn",
    sortDate: "2025-04-10",
  },
  {
    id: "train-booking-system",
    title: "User-friendly train booking app",
    description:
      "A user-friendly train booking application with a modern interface and seamless integration for booking train tickets, adhering to Human-Machine Interaction (IHM) principles.",
    category: "web-mobile",
    label: "Web Application",
    year: "June 2023",
    technologies: [
      "Python",
      "Django",
      "Django REST Framework",
      "Vanilla JavaScript",
      "Tailwind CSS",
    ],
    caseStudyKey: "train-booking-system",
    sortDate: "2023-06-01",
  },
    {
    id: "school-management-system",
    title: "University Academic Management System",
    description:
      "A centralized academic management platform designed for a university department in Madagascar. It streamlines student admissions, enrollment, class management, scheduling, grade tracking, and teacher administration, bringing essential academic processes into one system. The platform helps reduce manual administrative work, improve information management, and facilitate coordination between students, teachers, and administrative staff.",
    category: "desktop",
    label: "Desktop Application",
    year: "2022",
    technologies: [
      "C#",
    ],
    caseStudyKey: "school-management-system",
    sortDate: "2022-01-01",
    githubUrl: "https://github.com/nely20learnstech/school_management_system"
  },
   {
    id: "wannacry-cybersecurity",
    title: "Static and Dynamic Analysis of the WannaCry Ransomware",
    description:
      "A malware analysis project focused on examining WannaCry ransomware through static and dynamic analysis techniques to explore its behavior and develop foundational skills in malware analysis and cybersecurity.",
    category: "cybersecurity-cloud",
    label: "Cybersecurity",
    year: "2022",
    technologies: [
      "Windows 10",
      "Process Monitor",
      "Prosess Explorer",
      "YARA",
    ],
    caseStudyKey: "wannacry-cybersecurity",
    sortDate: "2022-01-01",
  },
  {
    id: "smart-home-prototype",
    title: "Smart Home Prototype",
    description:
      "A smart home prototype built using the Node-RED dashboard to provide an interface for controlling and monitoring IoT devices.",
    category: "robotics-embedded",
    label: "IoT Prototype",
    year: "",
    technologies: [
      "ESP32",
      "NodeRed",
      "MQTT",
      "FreeRTOS",
    ],
    caseStudyKey: "",
    sortDate: "",
    githubUrl: "https://github.com/nely20learnstech/mqtt-nodered-smart-home-simulation"
  },
 /*  {
    id: "",
    title: "",
    description:
      "",
    category: "",
    label: "",
    year: "",
    technologies: [
      "",
      "",
      "",
      "",
    ],
    caseStudyKey: "",
    sortDate: "",
  }, */
  

  /* {
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
  }, */
  /* {
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
  }, */
];