'use client';

import { useState, useEffect } from 'react';

const LanguageSwitcher = () => {
  const [locale, setLocale] = useState('en');

  useEffect(() => {
    const savedLocale = localStorage.getItem('locale') || 'en';
    setLocale(savedLocale);
  }, []);

  const toggleLocale = () => {
    const newLocale = locale === 'en' ? 'no' : 'en';
    setLocale(newLocale);
    localStorage.setItem('locale', newLocale);
    window.dispatchEvent(new CustomEvent('localeChange', { detail: newLocale }));
    window.location.reload();
  };

  return (
    <button
      onClick={toggleLocale}
      className="lang-btn"
      title={locale === 'en' ? 'Switch to Norwegian' : 'Bytt til Engelsk'}
      style={{
        background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
        border: 'none',
        color: '#fff',
        padding: '8px 12px',
        borderRadius: '8px',
        fontSize: '13px',
        fontWeight: '600',
        cursor: 'pointer',
        display: 'inline-flex',
        alignItems: 'center',
        gap: '5px',
        transition: 'all 0.3s ease',
        whiteSpace: 'nowrap',
        boxShadow: '0 2px 10px rgba(99, 102, 241, 0.4)',
        textTransform: 'uppercase',
        letterSpacing: '0.5px'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'scale(1.05)';
        e.currentTarget.style.boxShadow = '0 4px 15px rgba(99, 102, 241, 0.5)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'scale(1)';
        e.currentTarget.style.boxShadow = '0 2px 10px rgba(99, 102, 241, 0.4)';
      }}
    >
      <span style={{ fontSize: '15px' }}>{locale === 'en' ? '🇳🇴' : '🇬🇧'}</span>
      <span>{locale === 'en' ? 'NO' : 'EN'}</span>
    </button>
  );
};

export default LanguageSwitcher;
