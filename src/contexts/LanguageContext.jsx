import { createContext, useState } from 'react';
import { languages } from '../config/languages';

export const LanguageContext = createContext();

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
