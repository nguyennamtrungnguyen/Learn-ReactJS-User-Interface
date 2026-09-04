import { atom } from "recoil";

export const userState = atom({
  key: "userState",
  default: {
    data: [],
    loading: false,
    error: null,
  },
});
