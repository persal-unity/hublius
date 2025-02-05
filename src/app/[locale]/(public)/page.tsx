import { useTranslations } from 'next-intl';
import { Link } from '@/components/ui/link';

export default function Home() {
  const t = useTranslations('HomePage');

  return (
    <>
      <main className='row-start-2 flex flex-col items-center gap-8 sm:items-start'>
        <div>
          <h1>{t('title')}</h1>
          <h1>{t('title')}</h1>
          <h1>{t('title')}</h1>
          <h1>{t('title')}</h1>
          <h1>{t('title')}</h1>
          <h1>{t('title')}</h1>
          <h1>{t('title')}</h1>
          <h1>{t('title')}</h1>
          <h1>{t('title')}</h1>
          <h1>{t('title')}</h1>
          <h1>{t('title')}</h1>
          <h1>{t('title')}</h1>
          <h1>{t('title')}</h1>
          <h1>{t('title')}</h1>
          <h1>{t('title')}</h1>
          <h1>{t('title')}</h1>
          <h1>{t('title')}</h1>
          <h1>{t('title')}</h1>
          <h1>{t('title')}</h1>
          <h1>{t('title')}</h1>
          <h1>{t('title')}</h1>
          <h1>{t('title')}</h1>
          <h1>{t('title')}</h1>
          <h1>{t('title')}</h1>
          <h1>{t('title')}</h1>
          <h1>{t('title')}</h1>
          <h1>{t('title')}</h1>
          <h1>{t('title')}</h1>
          <h1>{t('title')}</h1>
          <h1>{t('title')}</h1>
          <h1>{t('title')}</h1>
          <h1>{t('title')}</h1>
          <h1>{t('title')}</h1>
          <h1>{t('title')}</h1>
          <h1>{t('title')}</h1>
          <h1>{t('title')}</h1>
          <h1>{t('title')}</h1>
          <h1>{t('title')}</h1>
          <h1>{t('title')}</h1>
          <h1>{t('title')}</h1>
          <h1>{t('title')}</h1>
          <h1>{t('title')}</h1>
          <h1>{t('title')}</h1>
          <h1>{t('title')}</h1>
          <h1>{t('title')}</h1>
          <h1>{t('title')}</h1>
          <h1>{t('title')}</h1>
          <h1>{t('title')}</h1>
          <h1>{t('title')}</h1>
          <h1>{t('title')}</h1>
          <h1>{t('title')}</h1>
          <h1>{t('title')}</h1>
          <h1>{t('title')}</h1>
          <h1>{t('title')}</h1>
          <h1>{t('title')}</h1>
          <h1>{t('title')}</h1>
          <h1>{t('title')}</h1>
          <h1>{t('title')}</h1>
          <h1>{t('title')}</h1>
          <h1>{t('title')}</h1>
          <h1>{t('title')}</h1>
          <h1>{t('title')}</h1>
          <h1>{t('title')}</h1>
          <Link href='/about'>{t('title')}</Link>
        </div>
      </main>
      <footer className='row-start-3 flex flex-wrap items-center justify-center gap-6'></footer>
    </>
  );
}
