import {getTranslations} from 'next-intl/server';
import {setRequestLocale} from 'next-intl/server';
import LanguageSwitcher from '../../components/LanguageSwitcher';
import Navigation from '../../components/Navigation';

export default async function HomePage({params}: {params: Promise<{locale: string}>}) {
  const {locale} = await params;
  
  // Enable static rendering
  setRequestLocale(locale);
  
  const t = await getTranslations('home');
  const tCommon = await getTranslations('common');

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            {t('title')}
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            {t('subtitle')}
          </p>
          <p className="text-lg text-gray-700 mb-12 max-w-2xl mx-auto">
            {t('description')}
          </p>
          
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200">
            {t('cta')}
          </button>
        </div>
      </main>
      
      <LanguageSwitcher />
    </div>
  );
}
