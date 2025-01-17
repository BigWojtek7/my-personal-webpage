import { useState } from 'react';
import { useLanguage, languages } from '../../contexts/LanguageContext';

export const LanguageSwitcher = () => {
  const { currentLanguage, changeLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  return (
    <div className="relative">
      <button
        onClick={toggleDropdown}
        className="flex items-center space-x-2 rounded-lg border border-[rgba(165,150,120,0.5)] px-3 py-2 text-white hover:bg-[rgba(165,150,120,0.1)]"
      >
        <span>{currentLanguage.flag}</span>
        <span>{currentLanguage.code.toUpperCase()}</span>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-32 rounded-lg border border-[rgba(165,150,120,0.5)] bg-footer shadow-lg">
          {Object.values(languages).map((lang) => (
            <button
              key={lang.code}
              onClick={() => {
                changeLanguage(lang.code);
                setIsOpen(false);
              }}
              className="flex w-full items-center space-x-2 px-4 py-2 text-white hover:bg-[rgba(165,150,120,0.1)]"
            >
              <span>{lang.flag}</span>
              <span>{lang.name}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
