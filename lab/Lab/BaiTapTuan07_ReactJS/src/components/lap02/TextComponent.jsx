import React from "react";
import { useRecoilValue } from "recoil";
import { ThemeState } from "../../recoil/ThemeState";
import "./ThemeToggle.css"

const TextComponent = () => {
  const theme = useRecoilValue(ThemeState);

  return (
      <p className={theme}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum vero
        exercitationem eveniet veniam, nam eligendi architecto beatae ullam est.
        Ducimus laudantium dicta et sunt in natus nostrum sequi illo quidem.
      </p>
  );
};

export default TextComponent;
