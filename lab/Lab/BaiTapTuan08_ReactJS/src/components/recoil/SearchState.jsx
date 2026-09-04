import { atom } from "recoil";

export const searchState = atom({
  key: "searchState",
  default: {
    keyword: "",
    results: [],
    loading: false,
  },
});
