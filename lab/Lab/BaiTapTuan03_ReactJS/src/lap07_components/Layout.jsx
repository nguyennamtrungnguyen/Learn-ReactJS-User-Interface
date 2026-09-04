import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";
import Card from "./Card";

export default function Layout() {
  const { theme } = useContext(ThemeContext);

  return (
    <div
      style={{
        minHeight: "100vh",
        background: theme === "light" ? "#f5f5f5" : "#222",
        color: theme === "light" ? "#000" : "#fff",
        padding: 40,
      }}
    >
      <h1
        style={{
          padding: 40,
          color: theme === "light" ? "#000" : "#fff",
        }}
      >
        Đổi background
      </h1>
      <Card />
    </div>
  );
}
