import { atom } from "recoil";

export const toastState = atom({
  key: "toastState",
  default: {
    message: "",
    visible: false,
  },
});
