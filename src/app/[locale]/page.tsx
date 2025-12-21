import { getTranslations } from 'next-intl/server';
import { setRequestLocale } from 'next-intl/server';
import Header from '@/components/layout/Header';
import { HeroSection } from '@/components/sections/HeroSection';
import { CallToActionCard } from '@/components/cards/CallToActionCard';
import { VideoSection } from '@/components/sections/VideoSection';
import ValuesSection from '@/components/sections/ValuesSection';
import ProcessSection from '@/components/sections/ProcessSection';
import Footer from '@/components/layout/Footer';
import FloatingBottomNav from '@/components/layout/FloatingBottomNav';
import { IMAGE_URLS } from '@/constants/urls';

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;

  // Enable static rendering
  setRequestLocale(locale);

  const t = await getTranslations('home');
  // const tCommon = await getTranslations('common'); // Unused for now

  return (
    <>
      <Header />
      <HeroSection />
      <div className='h-24 bg-white'></div>

      {/* Two Card Layout - unified container width */}
      <div className='bg-white'>
        <div className='container mx-auto max-w-9xl px-6 flex flex-col md:flex-row gap-8 md:gap-12'>
          <div className='flex-1'>
            <CallToActionCard
              subtitle={t('forNurses.subtitle')}
              title={t('forNurses.cardDescription')}
              backgroundImage={IMAGE_URLS.rabatSchoolClassroom2}
              backgroundColor="bg-[#00a6a2]"
              href={`/${locale}/simulation-course`}
            />
          </div>
          <div className='flex-1'>
            <CallToActionCard
              subtitle={t('forInstitutions.subtitle')}
              title={t('forInstitutions.cardDescription')}
              backgroundImage={IMAGE_URLS.rabatSchoolClassroom10}
              backgroundColor="bg-[#5A2574]"
              href={`/${locale}/contact`}
            />
          </div>
        </div>
      </div>
      <div className='h-24 bg-white'></div>
      <ValuesSection />
      <div className='h-24 bg-white'></div>
      <VideoSection />
      <div className='h-24 bg-white'></div>
      <ProcessSection />
      <div className='bg-white'>
        <div className='container mx-auto max-w-9xl px-6 flex flex-col md:flex-row gap-8 md:gap-12'>
          <div className='flex-1'>
            <CallToActionCard
              subtitle={t('forNurses.title')}
              title={t('forNurses.description')}
              backgroundImage={IMAGE_URLS.rabatSchoolStudents1}
              backgroundColor="bg-[#00a6a2]"
              href={`/${locale}/language-school`}
            />
          </div>
          <div className='flex-1'>
            <CallToActionCard
              subtitle={t('forInstitutions.title')}
              title={t('forInstitutions.description')}
              backgroundImage={IMAGE_URLS.rabatSchoolClassroom9}
              backgroundColor="bg-[#5A2574]"
              href={`/${locale}/faqs`}
            />
          </div>
        </div>
      </div>

      <div className='h-28 relative bg-white'></div>
      <Footer />
      <FloatingBottomNav />
    </>
  );
}
