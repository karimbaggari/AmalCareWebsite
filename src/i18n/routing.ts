import {defineRouting} from 'next-intl/routing';
import {createNavigation} from 'next-intl/navigation';

export const routing = defineRouting({
  // A list of all locales that are supported
  locales: ['en', 'de', 'fr', 'ar'],

  // Used when no locale matches
  defaultLocale: 'en',

  // The `pathnames` object holds pairs of internal and
  // external paths. Based on the locale, the external
  // paths are rewritten to the shared, internal ones.
  pathnames: {
    // If all locales use the same pathname, a single
    // string or only the internal pathname can be provided
    '/': '/',
    '/about': {
      en: '/about',
      de: '/ueber-uns',
      fr: '/a-propos',
      ar: '/حول'
    },
    '/contact': {
      en: '/contact',
      fr: '/contact',
      ar: '/اتصال'
    }
    // Dynamic params are supported via square brackets
    // '/news/[articleSlug]-[articleId]': {
    //   en: '/news/[articleSlug]-[articleId]',
    //   de: '/neuigkeiten/[articleSlug]-[articleId]'
    // }
  }
});

// Lightweight wrappers around Next.js' navigation APIs
// that will consider the routing configuration
export const {Link, redirect, usePathname, useRouter} =
  createNavigation(routing);