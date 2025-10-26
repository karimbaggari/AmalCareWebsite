import { setRequestLocale } from 'next-intl/server';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { SimpleImageHero } from '@/components/sections/GenericHeroSection';
import { IMAGE_URLS } from '@/constants/urls';

export default async function BecomeNursePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <Header />
      <SimpleImageHero
        image={IMAGE_URLS.nursesGermany1}
        imageAlt="Become a nurse in Germany"
        backgroundColor="#00a6a2"
        height="h-[600px]"
        imageWidth={900}
        imageHeight={600}
      />

      <section className="bg-white">
        <div className="container mx-auto max-w-9xl px-6 py-16 space-y-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-[#003c3a]">Become a Nurse in Germany</h1>
        
        </div>
      </section>
      <Footer />
    </>
  );
}