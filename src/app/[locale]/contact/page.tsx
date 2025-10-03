import { getTranslations } from 'next-intl/server';
import { setRequestLocale } from 'next-intl/server';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ContactPageContent from '@/components/sections/ContactPageContent';

export default async function ContactPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;

  // Enable static rendering
  setRequestLocale(locale);

  const t = await getTranslations('contact');

  return (
    <>
      <Header />
      <ContactPageContent />
      <Footer />
    </>
  );
}