// Core types for the portfolio application

export interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  github: string;
  demo?: string;
  featured?: boolean;
}

export interface Skill {
  name: string;
  level: number;
  category: 'frontend' | 'backend' | 'tools' | 'languages';
}

export interface Experience {
  title: string;
  organization: string;
  location: string;
  period: string;
  description: string;
  icon: any; // Lucide React icon component
  achievements: string[];
}

export interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: any; // Lucide React icon component
}

export interface NavigationItem {
  label: string;
  href: string;
}

// Animation and UI types
export interface AnimationConfig {
  initial: object;
  animate: object;
  transition?: object;
}

export interface ThemeColors {
  primary: string;
  secondary: string;
  accent: string;
  background: string;
  text: string;
} 