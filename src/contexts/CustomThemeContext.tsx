import Cookies from "js-cookie";
import { ThemeOpts, CustomThemeContextProps } from "../interfaces";
import { FC, ReactNode, createContext, useState, useEffect } from "react";

export const CustomThemeContext = createContext<CustomThemeContextProps>({
  currentTheme: null,
  changeCurrentTheme: null
});

export const CustomThemeProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState<ThemeOpts>(null);

  const changeCurrentTheme = (newTheme: ThemeOpts): void => {
    setCurrentTheme(newTheme);
    Cookies.set("_leonardojacomussi.com_currentTheme", newTheme);
  };

  useEffect(() => {
    let themeStore = Cookies.get("_leonardojacomussi.com_currentTheme");
    if (themeStore === "dark" || themeStore === "light") {
      setCurrentTheme(themeStore);
    };
  }, []);

  return (
    <CustomThemeContext.Provider value={{
      currentTheme: currentTheme, changeCurrentTheme: changeCurrentTheme
    }}>
      {children}
    </CustomThemeContext.Provider>
  );
};