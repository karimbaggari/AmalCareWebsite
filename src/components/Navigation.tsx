'use client';

import {useTranslations} from 'next-intl';
import {Link, usePathname} from '@/i18n/routing';

export default function Navigation() {
  const t = useTranslations('navigation');
  const pathname = usePathname();

  const navItems = [
    { href: '/' as const, label: t('home') },
    { href: '/about' as const, label: t('about') },
    { href: '/contact' as const, label: t('contact') },
  ];

  return (
    <nav className="bg-white shadow-sm border-b">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-2xl font-bold text-blue-600">
            AmalCare
          </Link>
          
          <div className="flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-gray-700 hover:text-blue-600 transition-colors duration-200 ${
                  pathname === item.href ? 'text-blue-600 font-semibold' : ''
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
