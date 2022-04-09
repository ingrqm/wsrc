import { codes } from 'data';

export const snakeToCamelCase = (string: string): string =>
  string
    .split('_')
    .map((string, index) => (index !== 0 ? string[0].toUpperCase() + string.slice(1) : string))
    .join('');

export const camelToSnakeCase = (string: string) => string.replace(/[A-Z]/g, (letter) => `_${letter.toLowerCase()}`);

export const htmlCodesToChar = (string: string): string => {
  let newString = string;

  codes.forEach(({ char, code }) => {
    newString = newString.replaceAll(code, char);
  });

  return newString;
};

export const charToHtmlCode = (string: string): string => {
  let newString = string;

  codes.forEach(({ char, code }) => {
    newString = newString.replaceAll(char, code);
  });

  return newString;
};
