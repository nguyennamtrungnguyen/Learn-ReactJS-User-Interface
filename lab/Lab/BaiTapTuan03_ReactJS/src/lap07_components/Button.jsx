import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

export default function Button() {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <div style={{ display: "flex", gap: 10 }}>
      <button
        onClick={() => setTheme("light")}
        style={{
          padding: "10px 16px",
          borderRadius: 8,
          border: "none",
          cursor: "pointer",
          background: theme === "light" ? "#222" : "#ddd",
          color: theme === "light" ? "#fff" : "#000",
        }}
      >
        Light
      </button>

      <button
        onClick={() => setTheme("dark")}
        style={{
          padding: "10px 16px",
          borderRadius: 8,
          border: "none",
          cursor: "pointer",
          background: theme === "dark" ? "#222" : "#ddd",
          color: theme === "dark" ? "#fff" : "#000",
        }}
      >
        Dark
      </button>
    </div>
  );
}
