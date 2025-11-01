import { setRequestLocale } from 'next-intl/server';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import FloatingBottomNav from '@/components/layout/FloatingBottomNav';
import { HeroSection } from '@/components/sections/faqs/HeroSection';
import FaqComponent from '@/components/sections/faqs/FaqComponent';

export default async function FAQsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <Header />
      <HeroSection />
      <FaqComponent />
      <Footer />
      <FloatingBottomNav />
    </>
  );
}


