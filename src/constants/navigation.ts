import { NavigationLink, SocialMediaLink } from '@/types';
import { Facebook, Instagram, Linkedin } from 'lucide-react';

export const MAIN_NAVIGATION: NavigationLink[] = [
  { href: '/', label: 'Startseite' },
  { href: '/about', label: 'Über uns' },
  { href: '/services', label: 'Leistungen' },
  { href: '/fachkraefte', label: 'Fachkräfte' },
  { href: '/arbeitgeber', label: 'Für Arbeitgeber' },
  { href: '/contact', label: 'Kontakt' },
];

export const LEGAL_LINKS: NavigationLink[] = [
  { href: '/impressum', label: 'Impressum' },
  { href: '/datenschutz', label: 'Datenschutz' },
  { href: '/agb', label: 'AGB' },
];

export const SOCIAL_MEDIA_LINKS: SocialMediaLink[] = [
  { 
    href: 'https://facebook.com/amalcare', 
    icon: Facebook, 
    label: 'Facebook' 
  },
  { 
    href: 'https://instagram.com/amalcare', 
    icon: Instagram, 
    label: 'Instagram' 
  },
  { 
    href: 'https://linkedin.com/company/amalcare', 
    icon: Linkedin, 
    label: 'LinkedIn' 
  },
];
