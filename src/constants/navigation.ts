import { NavigationLink, SocialMediaLink } from '@/types';
import { Facebook, Instagram, Linkedin } from 'lucide-react';
import { SOCIAL_URLS, LEGAL_URLS } from './urls';

export const MAIN_NAVIGATION: NavigationLink[] = [
  { href: '/', label: 'Startseite' },
  { href: '/about', label: 'Über uns' },
  { href: '/services', label: 'Leistungen' },
  { href: '/fachkraefte', label: 'Fachkräfte' },
  { href: '/arbeitgeber', label: 'Für Arbeitgeber' },
  { href: '/contact', label: 'Kontakt' },
];

export const LEGAL_LINKS: NavigationLink[] = [
  { href: LEGAL_URLS.impressum, label: 'Impressum' },
  { href: LEGAL_URLS.datenschutz, label: 'Datenschutz' },
  { href: LEGAL_URLS.agb, label: 'AGB' },
];

export const SOCIAL_MEDIA_LINKS: SocialMediaLink[] = [
  { 
    href: SOCIAL_URLS.facebook, 
    icon: Facebook, 
    label: 'Facebook' 
  },
  { 
    href: SOCIAL_URLS.instagram, 
    icon: Instagram, 
    label: 'Instagram' 
  },
  { 
    href: SOCIAL_URLS.linkedin, 
    icon: Linkedin, 
    label: 'LinkedIn' 
  },
];
