// import { getTranslations } from 'next-intl/server'; // Unused for now
import { setRequestLocale } from 'next-intl/server';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ContactPageContent from '@/components/sections/ContactPageContent';

export default async function ContactPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;

  // Enable static rendering
  setRequestLocale(locale);

  // const t = await getTranslations('contact'); // Unused for now

  return (
    <>
      <Header />
      <div className="h-16 sm:h-20 md:h-24 bg-[#00a6a2]"></div>
      <ContactPageContent />
      <Footer />
    </>
  );
}