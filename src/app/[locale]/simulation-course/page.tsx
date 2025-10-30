import { setRequestLocale } from 'next-intl/server';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import SimulationCourseContent from '@/components/sections/SimulationCourseContent';

export default async function SimulationCoursePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <Header />
      <SimulationCourseContent />
      <Footer />
    </>
  );
} 