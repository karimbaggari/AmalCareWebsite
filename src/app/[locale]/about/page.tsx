import {getTranslations} from 'next-intl/server';
import {setRequestLocale} from 'next-intl/server';
import Navigation from '@/components/Navigation';
import LanguageSwitcher from '@/components/LanguageSwitcher';

export default async function AboutPage({params}: {params: Promise<{locale: string}>}) {
  const {locale} = await params;
  setRequestLocale(locale);
  
  const t = await getTranslations('about');

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-white">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">
            {t('title')}
          </h1>
          <p className="text-lg text-gray-700 leading-relaxed">
            {t('description')}
          </p>
        </div>
      </main>
      
      <LanguageSwitcher />
    </div>
  );
}