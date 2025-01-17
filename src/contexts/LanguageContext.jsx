import { createContext, useContext, useState } from 'react';
import { en } from '../locales/en';
import { pl } from '../locales/pl';

const LanguageContext = createContext();

export const languages = {
  en: { code: 'en', name: 'English', translations: en, flag: '🇬🇧' },
  pl: { code: 'pl', name: 'Polski', translations: pl, flag: '🇵🇱' },
};

export function LanguageProvider({ children }) {
  const [currentLanguage, setCurrentLanguage] = useState(languages.en);

  const changeLanguage = (langCode) => {
    setCurrentLanguage(languages[langCode]);
  };

  return (
    <LanguageContext.Provider value={{ currentLanguage, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
