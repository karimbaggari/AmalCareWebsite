import { getTranslations } from 'next-intl/server';
import { setRequestLocale } from 'next-intl/server';
import Header from '@/components/layout/Header';
import { HeroSection } from '@/components/sections/HeroSection';
import { CallToActionCard } from '@/components/cards/CallToActionCard';
import AboutSection from '@/components/sections/AboutSection';
import { VideoSection } from '@/components/sections/VideoSection';
import ValuesSection from '@/components/sections/ValuesSection';
import ProcessSection from '@/components/sections/ProcessSection';
import Footer from '@/components/layout/Footer';
import { IMAGES } from '@/types';

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;

  // Enable static rendering
  setRequestLocale(locale);

  const t = await getTranslations('home');
  const tCommon = await getTranslations('common');

  return (
    <>
      <Header />
      <HeroSection />
      <div className='h-42 relative bg-white'></div>
      <AboutSection />

      {/* Two Card Layout */}
      <div className='flex justify-center relative gap-20 bg-white'>
        <CallToActionCard
          subtitle="FÜR PFLEGEFACHKRÄFTE AUS MAROKKO"
          title="Wir helfen Ihnen, gut vorbereitet zu starten."
          backgroundImage={IMAGES.ctaImage1}
          backgroundColor="bg-[#00a6a2]"
        />
        <CallToActionCard
          subtitle="FÜR EINRICHTUNGEN IN DEUTSCHLAND"
          title="Pflegefachkräfte aus dem Ausland gewinnen"
          backgroundImage={IMAGES.ctaImage2}
          backgroundColor="bg-[#5A2574]"
        />
      </div>
      <div className='h-28 relative bg-white'></div>
      <VideoSection />
      <div className='h-28 relative bg-white'></div>
      <ValuesSection />
      <ProcessSection />
      <div className='flex justify-center relative gap-20 bg-white'>
        <CallToActionCard
          subtitle="FÜR PFLEGEFACHKRÄFTE AUS MAROKKO"
          title="Wir helfen Ihnen, gut vorbereitet zu starten."
          backgroundImage={IMAGES.languageSchool}
          backgroundColor="bg-[#00a6a2]"
        />
        <CallToActionCard
          subtitle="FÜR EINRICHTUNGEN IN DEUTSCHLAND"
          title="Pflegefachkräfte aus dem Ausland gewinnen"
          backgroundImage={IMAGES.languageSchool}
          backgroundColor="bg-[#5A2574]"
        />
      </div>

      <div className='h-28 relative bg-white'></div>
      <Footer />
    </>
  );
}
