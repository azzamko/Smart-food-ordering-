/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    locales: ['en', 'ar', 'de'],
    defaultLocale: 'en',
    localeDetection: false
  }
}

module.exports = nextConfig;
