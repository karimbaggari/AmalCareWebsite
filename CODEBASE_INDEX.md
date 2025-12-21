# AmalCare Website - Codebase Index

## 📋 Project Overview

**AmalCare Website** is a Next.js 15 application built with TypeScript, featuring internationalization (i18n) support for multiple languages (English, German, French, Arabic). The website serves as a platform for healthcare recruitment and services, specifically focused on connecting nurses with opportunities in Germany.

### Tech Stack
- **Framework**: Next.js 15.5.3 (App Router)
- **Language**: TypeScript 5
- **UI**: React 19.1.0, Tailwind CSS 4
- **Internationalization**: next-intl 4.3.9
- **Icons**: lucide-react 0.544.0
- **Build Tool**: Turbopack

---

## 📁 Project Structure

```
AmalCareWebsite/
├── messages/              # Translation files
│   ├── ar.json           # Arabic translations
│   ├── de.json           # German translations
│   ├── en.json           # English translations
│   └── fr.json           # French translations
│
├── src/
│   ├── app/              # Next.js App Router pages
│   │   ├── [locale]/     # Localized routes
│   │   │   ├── about/
│   │   │   ├── become-a-nurse-in-germany/
│   │   │   ├── contact/
│   │   │   ├── faqs/
│   │   │   ├── language-school/
│   │   │   ├── simulation-course/
│   │   │   ├── layout.tsx
│   │   │   └── page.tsx
│   │   ├── globals.css
│   │   ├── icon.png
│   │   ├── layout.tsx
│   │   └── page.tsx
│   │
│   ├── components/       # React components
│   │   ├── cards/
│   │   ├── layout/
│   │   ├── sections/
│   │   └── ui/
│   │
│   ├── constants/        # Application constants
│   ├── i18n/            # Internationalization config
│   ├── types/           # TypeScript type definitions
│   └── middleware.ts    # Next.js middleware
│
├── eslint.config.mjs
├── next.config.ts
├── package.json
├── postcss.config.mjs
├── tsconfig.json
└── README.md
```

---

## 🗂️ Detailed File Structure

### **Pages (App Router)**

#### Root Layout & Pages
- `src/app/layout.tsx` - Root layout component
- `src/app/page.tsx` - Root page (redirects to locale)
- `src/app/globals.css` - Global styles
- `src/app/icon.png` - Site favicon

#### Localized Pages (`src/app/[locale]/`)
- `layout.tsx` - Locale-specific layout with i18n provider
- `page.tsx` - Homepage
- `about/page.tsx` - About page
- `become-a-nurse-in-germany/page.tsx` - Career information page
- `contact/page.tsx` - Contact page
- `faqs/page.tsx` - Frequently Asked Questions
- `language-school/page.tsx` - Language school information
- `simulation-course/page.tsx` - Simulation course details

### **Components**

#### Layout Components (`src/components/layout/`)
- `Header.tsx` - Main navigation header
- `Footer.tsx` - Site footer
- `FloatingBottomNav.tsx` - Mobile bottom navigation

#### Section Components (`src/components/sections/`)
- `AboutSection.tsx` - About section component
- `AboutPageContent.tsx` - Full about page content
- `ContactIntroSection.tsx` - Contact introduction
- `ContactPageContent.tsx` - Full contact page content
- `ContactPersonSection.tsx` - Contact person information
- `ExternalResourcesSection.tsx` - External links/resources
- `GenericHeroSection.tsx` - Reusable hero section
- `HeroSection.tsx` - Main hero section
- `ProcessSection.tsx` - Process/workflow section
- `SimulationCourseContent.tsx` - Simulation course content
- `ValuesSection.tsx` - Company values section
- `VideoSection.tsx` - Video display section

#### FAQ Components (`src/components/sections/faqs/`)
- `FaqComponent.tsx` - FAQ accordion component
- `HeroSection.tsx` - FAQ page hero
- `CTASection.tsx` - Call-to-action section

#### Language School Components (`src/components/sections/language-school/`)
- `LanguageSchoolSection.tsx` - Language school information

#### Card Components (`src/components/cards/`)
- `CallToActionCard.tsx` - CTA card component

#### UI Components (`src/components/ui/`)
- `accordion.tsx` - Accordion UI component
- `badge.tsx` - Badge component
- `button.tsx` - Button component
- `card.tsx` - Card component
- `LanguageSwitcher.tsx` - Language selection component

#### Other Components
- `careImage.tsx` - Care-related image component
- `ThemeToggle.tsx` - Dark/light theme toggle

### **Constants**

#### `src/constants/navigation.ts`
- `MAIN_NAVIGATION` - Main navigation links
- `LEGAL_LINKS` - Legal page links (Impressum, Datenschutz, AGB)
- `SOCIAL_MEDIA_LINKS` - Social media links with icons

#### `src/constants/urls.ts`
Centralized URL management system with categories:
- `SOCIAL_URLS` - Social media profiles
- `CONTACT_URLS` - Contact information (email, phone, WhatsApp)
- `PARTNER_URLS` - External partner organizations
- `EDUCATION_URLS` - Educational resources and certifications
- `LEGAL_URLS` - Legal pages (Impressum, Datenschutz, etc.)
- `RESOURCE_URLS` - Downloadable resources
- `MEDIA_URLS` - Press and media resources
- `MEDIA_CONTENT_URLS` - Video and multimedia content
- `APPLICATION_URLS` - Application portals
- `MOROCCO_URLS` - Morocco-specific resources
- `SUPPORT_URLS` - Support and help resources
- `CAREER_URLS` - Job and career resources
- `EVENT_URLS` - Events and webinars
- `TOOLS_URLS` - External tools and calculators
- `IMAGE_URLS` - Image CDN URLs (ImageKit)

Helper functions:
- `getUrl()` - Get URL by category and key
- `isExternalUrl()` - Check if URL is external
- `getUrlsByCategory()` - Get all URLs from a category

### **Internationalization**

#### `src/i18n/routing.ts`
- Routing configuration for i18n
- Locale definitions and routing rules

#### `src/i18n/request.ts`
- Server-side i18n request handling
- Message loading utilities

#### `src/middleware.ts`
- Next.js middleware for locale detection
- Route matching configuration

#### Translation Files (`messages/`)
- `en.json` - English translations
- `de.json` - German translations
- `fr.json` - French translations
- `ar.json` - Arabic translations

### **Types**

#### `src/types/index.ts`
TypeScript interfaces and types:
- `NavigationLink` - Navigation link structure
- `SocialMediaLink` - Social media link with icon
- `CallToActionCardProps` - CTA card props
- `ContactInfo` - Contact information structure
- `VideoItem` - Video item structure
- `COLORS` - Color palette constants
- `IMAGES` - Image URL constants (re-exported from urls.ts)

---

## 🔧 Configuration Files

### `package.json`
**Scripts:**
- `dev` - Development server with Turbopack
- `build` - Production build with Turbopack
- `start` - Start production server
- `lint` - Run ESLint

**Key Dependencies:**
- next: ^15.5.3
- react: ^19.1.0
- react-dom: ^19.1.0
- next-intl: ^4.3.9
- lucide-react: ^0.544.0
- tailwindcss: ^4

### `tsconfig.json`
- TypeScript configuration
- Path aliases: `@/*` → `./src/*`
- Strict mode enabled
- Next.js plugin integration

### `next.config.ts`
- Next.js configuration
- Turbopack settings

### `eslint.config.mjs`
- ESLint configuration
- Next.js ESLint rules

### `postcss.config.mjs`
- PostCSS configuration
- Tailwind CSS integration

---

## 🌐 Internationalization (i18n)

### Supported Locales
- **en** - English
- **de** - German
- **fr** - French
- **ar** - Arabic (RTL support)

### Locale Detection
- Middleware handles automatic locale detection
- Routes are prefixed with locale: `/{locale}/path`
- Static params generated for all locales

### RTL Support
- Arabic (`ar`) locale uses RTL text direction
- Other locales use LTR

---

## 🎨 Styling

### Tailwind CSS
- Version 4
- Configured via PostCSS
- Custom color palette defined in `types/index.ts`

### Color Palette
- **Primary**: `#00a6a2` (teal)
- **Primary Dark**: `#008a87`
- **Primary Darker**: `#006b68`
- **Secondary**: `#5A2574` (purple)
- **Gray Scale**: 50-900 shades

### Fonts
- **Geist Sans** - Primary font
- **Geist Mono** - Monospace font
- Loaded via Next.js font optimization

---

## 📱 Features

### Navigation
- Main navigation menu
- Mobile floating bottom navigation
- Language switcher
- Social media links

### Pages
1. **Homepage** - Main landing page
2. **About** - Company information
3. **Become a Nurse in Germany** - Career information
4. **Contact** - Contact form and information
5. **FAQs** - Frequently asked questions with accordion
6. **Language School** - Language learning information
7. **Simulation Course** - Course details

### Components
- Reusable section components
- Card-based layouts
- Accordion FAQ component
- Video sections
- Call-to-action cards
- Theme toggle (dark/light mode)

---

## 🔗 External Resources

### Image Hosting
- **ImageKit CDN** - Primary image hosting
- **Vercel Blob Storage** - Additional image storage
- **amal-care.de** - Original image source

### External Links
- Social media platforms
- Government resources (BAMF, Goethe Institute)
- Educational resources
- Partner organizations

---

## 🚀 Development

### Getting Started
```bash
npm run dev      # Start development server
npm run build    # Build for production
npm start        # Start production server
npm run lint     # Run linter
```

### Development Server
- Runs on `http://localhost:3000`
- Uses Turbopack for fast builds
- Hot module replacement enabled

---

## 📝 Notes

### URL Management
- All URLs are centralized in `src/constants/urls.ts`
- Use helper functions to access URLs
- External URLs are automatically detected

### Component Organization
- Components are organized by feature/type
- Reusable UI components in `ui/` folder
- Page-specific sections in `sections/` folder
- Layout components in `layout/` folder

### Type Safety
- TypeScript strict mode enabled
- All components are typed
- Shared types in `types/index.ts`

---

## 🔍 Quick Reference

### Import Paths
- Components: `@/components/...`
- Constants: `@/constants/...`
- Types: `@/types/...`
- i18n: `@/i18n/...`

### Common Imports
```typescript
import { NavigationLink } from '@/types';
import { MAIN_NAVIGATION } from '@/constants/navigation';
import { IMAGE_URLS } from '@/constants/urls';
import { useTranslations } from 'next-intl';
```

---

## 📊 Statistics

- **Total TypeScript/TSX Files**: ~37
- **Components**: ~30
- **Pages**: 7
- **Supported Languages**: 4
- **Translation Files**: 4

---

*Last Updated: Generated automatically*
*Project: AmalCare Website*
*Version: 0.1.0*

