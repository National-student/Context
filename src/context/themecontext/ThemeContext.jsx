import React, { createContext } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {

  
  const handleTheme = (evt) => {
    setTheme(evt.target.value);
  }

  const [theme, setTheme] = React.useState("light");

  return <ThemeContext.Provider value={{theme, handleTheme}}>{children}</ThemeContext.Provider>;
};
