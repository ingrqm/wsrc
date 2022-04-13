import { Age } from 'enums';

export const getAgeEnum = (age: number): Age => {
  switch (true) {
    case age < 12:
      return Age.child;
    case age < 17:
      return Age.teen;
    default:
      return Age.adult;
  }
};
