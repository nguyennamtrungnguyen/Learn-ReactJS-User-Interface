import { atom, selector } from "recoil";

export const lengthState = atom({
  key: "lengthState",
  default: 0,
});

export const widthState = atom({
  key: "widthState",
  default: 0,
});

export const areaState = selector({
  key: "areaState",
  get: ({ get }) => {
    const length = get(lengthState);
    const width = get(widthState);
    return length * width;
  },
});
