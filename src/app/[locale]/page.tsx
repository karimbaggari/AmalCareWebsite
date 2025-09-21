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
      
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <p className="text-blue-600 font-semibold text-lg mb-4">
            {t('tagline')}
          </p>
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            {t('title')}
          </h1>
          <p className="text-xl text-gray-700 mb-8 leading-relaxed">
            {t('subtitle')}
          </p>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {t('description')}
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              {t('mission.title')}
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              {t('mission.description')}
            </p>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              {t('whatWeDo.title')}
            </h2>
            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
              <p>{t('whatWeDo.description')}</p>
              <p>{t('whatWeDo.details')}</p>
              <p className="font-semibold text-blue-700 text-center text-xl">
                {t('whatWeDo.focus')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div className="bg-blue-600 text-white p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">
                {t('forNurses.title')}
              </h3>
              <p className="text-lg leading-relaxed">
                {t('forNurses.description')}
              </p>
            </div>
            <div className="bg-green-600 text-white p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">
                {t('forInstitutions.title')}
              </h3>
              <p className="text-lg leading-relaxed">
                {t('forInstitutions.description')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What Makes Us Special Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              {tCommon('equityQuality')}
            </h2>
            <h3 className="text-xl text-gray-600 mb-8">
              {t('whatMakesUsSpecial.title')}
            </h3>
            <div className="space-y-6 text-lg text-gray-700 leading-relaxed text-left">
              <p>{t('whatMakesUsSpecial.description')}</p>
              <p>{t('whatMakesUsSpecial.expertise')}</p>
              <p className="font-semibold text-blue-700 text-center text-xl">
                {t('whatMakesUsSpecial.commitment')}
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <LanguageSwitcher />
    </div>
  );
}
