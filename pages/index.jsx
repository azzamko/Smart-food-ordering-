// pages/index.jsx
import React from 'react';
import { useTranslation } from 'react-i18next';
import '../i18n'; // هذا السطر يقوم بتحميل إعدادات الترجمة

export default function HomePage() {
  const { t } = useTranslation();

  return (
    <div style={{ padding: '20px' }}>
      <h1>{t('pizza')}</h1>
      <p>{t('place_order')}</p>

      <label>{t('select_dish')}:</label>
      <select>
        <option value="">{t('choose')}</option>
        <option value="pizza">{t('pizza')}</option>
        <option value="burger">{t('burger')}</option>
        <
