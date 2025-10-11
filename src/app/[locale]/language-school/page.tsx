import { setRequestLocale } from 'next-intl/server';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { SimpleImageHero } from '@/components/sections/GenericHeroSection';
import LanguageSchoolSection from '@/components/sections/language-school/LanguageSchoolSection';

export default async function LanguageSchoolPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <Header />
      <SimpleImageHero
        image="https://www.amal-care.de/fileadmin/_processed_/d/c/csm_AmalCare-60_90c893b951.webp"
        imageAlt="Language School"
        backgroundColor="#00a6a2"
        height="h-[600px]"
        imageWidth={900}
        imageHeight={600}
      />

      <div className="h-16 sm:h-20 md:h-24"></div>
      <LanguageSchoolSection />
      <div className="h-16 sm:h-20 md:h-24"></div>
      <Footer />
    </>
  );
}


