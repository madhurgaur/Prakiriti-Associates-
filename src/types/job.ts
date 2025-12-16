export interface Job {
  id: string;
  title: string;
  department: "Engineering" | "Sales" | "Marketing" | "Operations" | "HR" | "Finance";
  location: "Remote" | "Onsite" | "Hybrid";
  experienceMin: number;
  experienceMax: number;
  employmentType: "Full-time" | "Contract" | "Part-time";
  description: string;
  responsibilities: string[];
  requiredSkills: string[];
  preferredSkills: string[];
  benefits: string[];
  postedDate: string;
  isActive: boolean;
}

export interface JobApplication {
  jobId: string;
  fullName: string;
  email: string;
  phone: string;
  yearsOfExperience: number;
  resume: File | null;
  coverNote: string;
  appliedDate: string;
}

export interface JobFilters {
  department: string;
  location: string;
  employmentType: string;
  experienceLevel: string;
}
