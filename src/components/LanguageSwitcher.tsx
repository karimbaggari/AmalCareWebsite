'use client';

import {useLocale} from 'next-intl';
import {useRouter, usePathname} from '@/i18n/routing';
import {routing} from '@/i18n/routing';

const languageNames = {
  en: 'English',
  fr: 'Français',
  ar: 'العربية'
};

const languageFlags = {
  en: '🇺🇸',
  fr: '🇫🇷',
  ar: '🇸🇦'
};

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const handleLanguageChange = (newLocale: string) => {
    router.replace(pathname, {locale: newLocale});
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div className="bg-white rounded-lg shadow-lg border p-2">
        <div className="flex flex-col space-y-1">
          {routing.locales.map((lng) => (
            <button
              key={lng}
              onClick={() => handleLanguageChange(lng)}
              className={`flex items-center space-x-2 px-3 py-2 rounded-md text-sm transition-colors duration-200 ${
                locale === lng
                  ? 'bg-blue-100 text-blue-700 font-semibold'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              <span className="text-lg">{languageFlags[lng as keyof typeof languageFlags]}</span>
              <span>{languageNames[lng as keyof typeof languageNames]}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}