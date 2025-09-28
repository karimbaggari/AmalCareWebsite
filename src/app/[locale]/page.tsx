import { getTranslations } from 'next-intl/server';
import { setRequestLocale } from 'next-intl/server';
import Navbar from '@/components/Navbar';
import { HeroSection } from '@/components/HeroSection';
import { CallToAction } from '@/components/callToAction';
import QuickAbout from '@/components/QuickAbout';

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;

  // Enable static rendering
  setRequestLocale(locale);

  const t = await getTranslations('home');
  const tCommon = await getTranslations('common');

  return (
    <>
      <Navbar />
      <HeroSection />
      <div className='h-32 bg-white'></div>
      <QuickAbout />
      
      {/* Two Card Layout */}
      <div className='flex justify-center relative gap-10 bg-white'>
        <CallToAction
          subtitle="FÜR PFLEGEFACHKRÄFTE AUS MAROKKO"
          title="Wir helfen Ihnen, gut vorbereitet zu starten."
          backgroundImage="https://www.amal-care.de/fileadmin/_processed_/d/b/csm_AmalCare-49_40f8beb5c3.webp"
          backgroundColor="bg-[#00a6a2]"
        />
        <CallToAction
          subtitle="FÜR EINRICHTUNGEN IN DEUTSCHLAND"
          title="Pflegefachkräfte aus dem Ausland gewinnen"
          backgroundImage="https://www.amal-care.de/fileadmin/_processed_/7/0/csm_AmalCare-19_d532d38f2c.webp"
          backgroundColor="bg-[#5A2574]"
        />
      </div>
    </>
  );
}
