// Application constants and configuration

import { NavigationItem, SocialLink } from '../types';
import { Github, Mail, Linkedin, ExternalLink } from 'lucide-react';

// Navigation configuration
export const NAVIGATION_ITEMS: NavigationItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

// Social media links
export const SOCIAL_LINKS: SocialLink[] = [
  {
    name: 'GitHub',
    url: 'https://github.com/KennelyRay',
    icon: Github,
  },
  {
    name: 'Email',
    url: 'mailto:krbucang@gmail.com',
    icon: Mail,
  },
  {
    name: 'LinkedIn',
    url: '#', // Add LinkedIn URL when available
    icon: Linkedin,
  },
];

// Personal information
export const PERSONAL_INFO = {
  name: 'Kennely Ray Bucang',
  title: 'BSIT Student & Aspiring Developer',
  email: 'krbucang@gmail.com',
  github: '@KennelyRay',
  location: 'Baguio City, Philippines',
  university: 'Saint Louis University',
  degree: 'Bachelor of Science in Information Technology',
  graduationYear: '2026',
};

// Animation configurations
export const ANIMATION_DURATION = 0.6;
export const STAGGER_DELAY = 0.1;

// Breakpoints for responsive design
export const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
} as const; 