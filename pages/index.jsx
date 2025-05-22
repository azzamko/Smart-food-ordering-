import { useRouter } from 'next/router';
import en from '../locales/en/common.json';
import ar from '../locales/ar/common.json';
import de from '../locales/de/common.json';

export default function Home() {
  const { locale } = useRouter();
  const t = locale === 'ar' ? ar : locale === 'de' ? de : en;

  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial, sans-serif', direction: locale === 'ar' ? 'rtl' : 'ltr' }}>
      <h1>{t.welcome}</h1>
      <p>{t.description}</p>
    </div>
  );
}
