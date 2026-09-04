import React from "react";
import { atom } from "recoil";

export const ThemeState = atom({
  key: "themeState",
  default: "light",
});
