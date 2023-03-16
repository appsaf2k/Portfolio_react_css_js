import "./style.css";
import "./../../styles/main.css";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useLocalStorage } from "../../utils/useLocalStorage";
import { defaultThemeMode } from "../../utils/detectDarkMode";
import sun from "./icons/sun.svg";
import moon from "./icons/moon.svg";

const dark = "dark-mode__btn dark-mode__on";
const light = "dark-mode__btn";
const darkModeImg = "header-wrapper__img";

function changeClassName(isDark = false) {
  const headerImg = document.getElementById("header-img");
  if (!headerImg) return;

  if (isDark) {
    headerImg.classList.remove(darkModeImg);
  } else {
    headerImg.classList.add(darkModeImg);
  }
}

export function BtnDarkMode() {
  const location = useLocation();

  const [themeMode, setThemeMode] = useLocalStorage(dark, defaultThemeMode());

  useEffect(() => {
    if (themeMode === dark) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [themeMode]);

  useEffect(() => {
    changeClassName(themeMode !== dark);
  }, [location.pathname, themeMode]);

  useEffect(() => {
    window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", (event) => {
      const newColorScheme = event.matches ? dark : light;
      setThemeMode(newColorScheme);
    });
  }, [setThemeMode]);

  const toggleThemeMode = () => {
    setThemeMode((value) => (value === light ? dark : light));
    changeClassName(themeMode !== dark);
  };

  return (
    <button className={themeMode} onClick={toggleThemeMode}>
      <img src={sun} alt="sun" className="button-dark-mode-icons" />
      <img src={moon} alt="moon" className="button-dark-mode-icons" />
    </button>
  );
}
