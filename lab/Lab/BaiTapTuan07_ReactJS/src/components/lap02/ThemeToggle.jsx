import React from "react";
import { useRecoilState } from "recoil";
import { ThemeState } from "../../recoil/ThemeState";

const ThemeToggle = () => {
  const [theme, setTheme] = useRecoilState(ThemeState);
  function toggleTheme() {
    setTheme(theme === "light" ? "dark" : "light");
  }
  return (
    <div>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
};

export default ThemeToggle;
