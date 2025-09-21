import {getTranslations} from 'next-intl/server';
import {setRequestLocale} from 'next-intl/server';
import Navigation from '@/components/Navigation';
import LanguageSwitcher from '@/components/LanguageSwitcher';

export default async function ContactPage({params}: {params: Promise<{locale: string}>}) {
  const {locale} = await params;
  setRequestLocale(locale);
  
  const t = await getTranslations('contact');

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-white">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">
            {t('title')}
          </h1>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-2">{t('address')}</h3>
              <p className="text-gray-600">123 Healthcare St.<br />Medical City, MC 12345</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-2">{t('phone')}</h3>
              <p className="text-gray-600">+1 (555) 123-4567</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-2">{t('email')}</h3>
              <p className="text-gray-600">info@amalcare.com</p>
            </div>
          </div>
        </div>
      </main>
      
      <LanguageSwitcher />
    </div>
  );
}
