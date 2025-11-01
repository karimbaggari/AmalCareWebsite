import { setRequestLocale } from 'next-intl/server';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import FloatingBottomNav from '@/components/layout/FloatingBottomNav';
import LanguageSchoolSection from '@/components/sections/language-school/LanguageSchoolSection';

export default async function LanguageSchoolPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <Header />
      <LanguageSchoolSection />
      <Footer />
      <FloatingBottomNav />
    </>
  );
}