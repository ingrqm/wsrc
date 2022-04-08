import { atom } from 'recoil';

export const timeAtom = atom({
  key: 'time',
  default: new Date(),
});
