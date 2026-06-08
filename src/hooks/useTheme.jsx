import { createContext, useCallback, useContext, useMemo, useSyncExternalStore } from "react";

const STORAGE_KEY = "theme";
const DARK_CLASS = "dark-vertion";
const LIGHT_CLASS = "white-vertion";
const BASE_CLASS = "black-bg";

const getStoredTheme = () =>
  localStorage.getItem(STORAGE_KEY) === "light" ? "light" : "dark";

const applyTheme = (theme) => {
  document.body.classList.remove(DARK_CLASS, LIGHT_CLASS);
  document.body.classList.add(
    theme === "dark" ? DARK_CLASS : LIGHT_CLASS,
    BASE_CLASS
  );
  document.documentElement.setAttribute("data-theme", theme);
};

let themeListeners = [];

const subscribeTheme = (listener) => {
  themeListeners.push(listener);
  return () => {
    themeListeners = themeListeners.filter((item) => item !== listener);
  };
};

const getThemeSnapshot = () => getStoredTheme();

const setTheme = (theme) => {
  localStorage.setItem(STORAGE_KEY, theme);
  applyTheme(theme);
  themeListeners.forEach((listener) => listener());
};

const ThemeContext = createContext(null);

export const ThemeProvider = ({ children }) => {
  const theme = useSyncExternalStore(subscribeTheme, getThemeSnapshot, () => "dark");

  const toggleTheme = useCallback(() => {
    setTheme(theme === "dark" ? "light" : "dark");
  }, [theme]);

  const value = useMemo(
    () => ({
      theme,
      isDark: theme === "dark",
      toggleTheme,
    }),
    [theme, toggleTheme]
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within ThemeProvider");
  }
  return context;
};
