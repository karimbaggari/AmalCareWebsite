import {getTranslations} from 'next-intl/server';
import {setRequestLocale} from 'next-intl/server';

export default async function HomePage({params}: {params: Promise<{locale: string}>}) {
  const {locale} = await params;
  
  // Enable static rendering
  setRequestLocale(locale);
  
  const t = await getTranslations('home');
  const tCommon = await getTranslations('common');

  return (
    <>
    <h1>{t('title')}</h1>
    <p>{t('description')}</p>
    <p>{tCommon('common')}</p>
    </>
    
  );
}
