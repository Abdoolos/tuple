'use client';

import { useState, useEffect } from 'react';
import { translations, Locale } from '@/lib/translations';

export const useLocale = () => {
  const [locale, setLocale] = useState<Locale>('en');

  useEffect(() => {
    const savedLocale = (localStorage.getItem('locale') as Locale) || 'en';
    setLocale(savedLocale);

    const handleLocaleChange = (e: CustomEvent) => {
      setLocale(e.detail as Locale);
    };

    window.addEventListener('localeChange', handleLocaleChange as EventListener);
    
    return () => {
      window.removeEventListener('localeChange', handleLocaleChange as EventListener);
    };
  }, []);

  const t = translations[locale];

  return { locale, t };
};
