import { createContext } from "react";
import { useState } from "react";

export const ThemeContext = createContext();

export default function ThemeContextProvider(props) {
  const selectedTheme = localStorage.getItem("selectedTheme");
  const [theme, setTheme] = useState(selectedTheme ?? "light");

  const htmlTag = document.getElementsByTagName("html")[0];

  localStorage.setItem("selectedTheme", theme);

  htmlTag.setAttribute("data-bs-theme", theme);

  const contextValue = {
    theme,
    setTheme,
  };

  return (
    <ThemeContext.Provider value={contextValue}>
      {props.children}
    </ThemeContext.Provider>
  );
}
