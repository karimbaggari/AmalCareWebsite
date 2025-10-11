import { setRequestLocale } from 'next-intl/server';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { SimpleImageHero } from '@/components/sections/GenericHeroSection';

export default async function BecomeNursePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <Header />
      <SimpleImageHero
        image="https://www.amal-care.de/fileadmin/_processed_/d/c/csm_AmalCare-60_90c893b951.webp"
        imageAlt="Become a nurse in Germany"
        backgroundColor="#00a6a2"
        height="h-[600px]"
        imageWidth={900}
        imageHeight={600}
      />

      <section className="bg-white">
        <div className="container mx-auto max-w-9xl px-6 py-16 space-y-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-[#003c3a]">Become a Nurse in Germany</h1>
          <p className="text-gray-700 text-lg leading-relaxed">
            Guidance on qualifications, language, and recognition process will be published here soon.
          </p>
        </div>
      </section>
      <Footer />
    </>
  );
}


