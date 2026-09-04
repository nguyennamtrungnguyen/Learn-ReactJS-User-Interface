import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";
import Button from "./Button";

export default function Card() {
  const { theme } = useContext(ThemeContext);

  return (
    <div
      style={{
        padding: 20,
        borderRadius: 12,
        background: theme === "light" ? "#fff" : "#333",
        boxShadow: "0 4px 10px rgba(0,0,0,0.1)"
      }}
    >
      <p>Đây là Card component</p>
      <Button />
    </div>
  );
}
