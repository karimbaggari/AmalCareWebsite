// Common types used across the application

export interface NavigationLink {
  href: string;
  label: string;
}

export interface SocialMediaLink {
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  label: string;
}

export interface CallToActionCardProps {
  subtitle: string;
  title: string;
  backgroundImage: string;
  backgroundColor: string;
  href?: string;
}

export interface ContactInfo {
  email: string;
  phone: string;
  location: string;
}

export interface VideoItem {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  flag: string;
  href?: string;
}

// Color constants
export const COLORS = {
  primary: '#00a6a2',
  primaryDark: '#008a87',
  primaryDarker: '#006b68',
  secondary: '#5A2574',
  white: '#ffffff',
  gray: {
    50: '#f9fafb',
    100: '#f3f4f6',
    200: '#e5e7eb',
    300: '#d1d5db',
    400: '#9ca3af',
    500: '#6b7280',
    600: '#4b5563',
    700: '#374151',
    800: '#1f2937',
    900: '#111827',
  },
} as const;

// Common image URLs
export const IMAGES = {
  keyvisual: 'https://www.amal-care.de/_assets/6020ad64298e304d8b844c8dc69c472e/Images//Frontend/keyvisual.svg',
  heroImage: 'https://www.amal-care.de//fileadmin/_processed_/2/a/csm_AmalCare-28_c19a1c4d25.webp',
  valuesImage: 'https://www.amal-care.de/fileadmin/_processed_/b/d/csm_img-fairness-xxl-lg-1_9b644be1a5.webp',
  processImage: 'https://www.amal-care.de/fileadmin/_processed_/6/3/csm_amal-teaser-vermittlung_7933672b40.webp',
  ctaImage1: 'https://www.amal-care.de/fileadmin/_processed_/d/b/csm_AmalCare-49_40f8beb5c3.webp',
  ctaImage2: 'https://www.amal-care.de/fileadmin/_processed_/7/0/csm_AmalCare-19_d532d38f2c.webp',
  languageSchool: 'https://www.amal-care.de/fileadmin/_processed_/7/0/csm_img-sprachschule_f734c6b63c.webp',
} as const;
