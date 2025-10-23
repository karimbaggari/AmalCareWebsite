// import { getTranslations } from 'next-intl/server'; // Unused for now
import { setRequestLocale } from 'next-intl/server';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import AboutPageContent from '@/components/sections/AboutPageContent';

export default async function AboutPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;

  // Enable static rendering
  setRequestLocale(locale);

  // const t = await getTranslations('about'); // Unused for now

  return (
    <>
      <Header />
      <AboutPageContent />
      <Footer />
    </>
  );
}