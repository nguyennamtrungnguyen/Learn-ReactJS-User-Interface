import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

export default function Button() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className={theme === "dark" ? "bg-black text-white p-5" : "p-5"}>
      <button onClick={toggleTheme} className="border px-4 py-2">
        Toggle Theme ({theme})
      </button>
    </div>
  );
}
