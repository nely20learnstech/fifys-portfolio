export interface Experience {
  id: string;
  company: string;
  role: string;
  location: string;
  startDate?: string;
  endDate?: string;
  current?: boolean;
  type: "Full-time" | "Internship";
  description: string;
  responsibilities?: string[];
  technologies?: string[];
  highlights?: string[];
}