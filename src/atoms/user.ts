import { Permission, Language } from 'enums';
import { atom } from 'recoil';

type User =
  | undefined
  | {
      id: number;
      name: string;
      surname: string;
      age: number;
      phone: string;
      mail: string;
      crew: string;
      continent: string;
      country: string;
      region: string;
      language: {
        app: Language;
        championship: Language;
      };
      permission: Permission;
    };

export const userAtom = atom({
  key: 'user',
  default: undefined as User,
});
