import { createContext, useState } from "react";
import en from "../Languages/en";
import hi from "../Languages/hi";
import kn from "../Languages/kn";

export const LanguageContext = createContext();

const languageList = ["en", "hi", "kn"];

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("en");

  const texts = {
    en,
    hi,
    kn,
  }[language];

  const toggleLanguage = () => {
    const currentIndex = languageList.indexOf(language);
    const nextLanguage = languageList[(currentIndex + 1) % languageList.length];
    setLanguage(nextLanguage);
  };

  const nextFlag = {
    en: "hi",
    hi: "kn",
    kn: "en",
  }[language];

  return (
    <LanguageContext.Provider
      value={{ language, texts, toggleLanguage, nextFlag }}
    >
      {children}
    </LanguageContext.Provider>
  );
};
