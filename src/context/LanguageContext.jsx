import React, { createContext, useContext, useState, useEffect } from 'react';

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState('en');

  useEffect(() => {
    const currentLang = navigator.language || navigator.userLanguage;
    if (currentLang && currentLang.toLowerCase().includes('pt')) {
      setLanguage('pt');
    } else {
      setLanguage('en');
    }
  }, []);

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
