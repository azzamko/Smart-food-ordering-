// pages/index.jsx
import React from 'react';
import { useTranslation } from 'react-i18next';
import '../i18n'; // تحميل إعدادات الترجمة

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
        <option value="salad">{t('salad')}</option>
      </select>

      <div style={{ marginTop: '20px' }}>
        <label>{t('quantity')}:</label>
        <input type="number" min="1" defaultValue="1" />
      </div>

      <button style={{ marginTop: '20px' }}>
        {t('submit_order')}
      </button>
    </div>
  );
}
