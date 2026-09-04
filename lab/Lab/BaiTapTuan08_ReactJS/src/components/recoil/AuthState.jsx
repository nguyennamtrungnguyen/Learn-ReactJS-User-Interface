import { atom } from "recoil";

const storedToken = localStorage.getItem("token");

export const authState = atom({
  key: "authState",
  default: {
    token: storedToken || null,
    user: null,
  },
});
