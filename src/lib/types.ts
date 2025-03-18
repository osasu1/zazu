
export interface NavItem {
  title: string;
  href: string;
}

export interface SkillItem {
  title: string;
  description: string;
}

export interface ExperienceItem {
  title: string;
  company: string;
  duration: string;
  description: string[];
  tags?: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  shortDescription: string;
  description?: string[];
  image?: string;
  tags?: string[];
  achievements?: string[];
  challenges?: string[];
  futureItems?: string[];
}

export interface BlogPost {
  title: string;
  excerpt: string;
  url: string;
  date: string;
  image?: string;
}

export interface Certificate {
  title: string;
  issuer: string;
  issueDate: string;
  expiryDate?: string;
  credentialId?: string;
  credentialUrl?: string;
  image?: string;
}
