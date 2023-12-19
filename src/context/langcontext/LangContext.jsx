import React from "react";

export const LangContext = React.createContext();

export const Langprovider = ({ children }) => {
  const [lang, setLang] = React.useState("eng");

  const handleLang = (evt) => {
    setLang(evt.target.value);
  };

  return (
    <LangContext.Provider value={{ lang, handleLang }}>
      {children}
    </LangContext.Provider>
  );
};
