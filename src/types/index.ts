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

// Image URLs - Now managed in centralized URL system
// Import from: @/constants/urls (IMAGE_URLS)
// This constant is kept for backward compatibility but should be phased out
import { IMAGE_URLS } from '@/constants/urls';

export const IMAGES = IMAGE_URLS;
