
import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Head from 'next/head'

export default function Home() {
  const { t } = useTranslation('common')

  return (
    <div>
      <Head>
        <title>Smart Food Ordering</title>
      </Head>
      <main style={{ padding: '2rem', textAlign: 'center' }}>
        <h1>{t('welcome')}</h1>
      </main>
    </div>
  )
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  }
}
