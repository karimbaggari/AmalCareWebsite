import { setRequestLocale } from 'next-intl/server';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { SimpleImageHero } from '@/components/sections/GenericHeroSection';
import FaqComponent from '@/components/sections/faqs/FaqComponent';
import { IMAGE_URLS } from '@/constants/urls';

export default async function FAQsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <Header />
      <SimpleImageHero
        image={IMAGE_URLS.rabatSchoolClassroom2}
        imageAlt="FAQs - Frequently Asked Questions"
        backgroundColor="#00a6a2"
        height="h-[600px]"
        imageWidth={900}
        imageHeight={600}
      />

      <div className="h-16 sm:h-20 md:h-24 bg-gray-50"></div>
      <FaqComponent />
      <div className="h-16 sm:h-20 md:h-24 bg-gray-50"></div>
      <Footer />
    </>
  );
}


