import { generatePath } from 'react-router-dom';

export const pathToCamelCase = (string: string): string => {
  const forbidden = ['/', ':', '.'];

  if (forbidden.includes(string)) return string;

  return string
    .replace('/', '')
    .replaceAll('/', '.')
    .split('-')
    .map((string) => (string.includes('.') ? string : string[0].toUpperCase() + string.slice(1)))
    .join('')
    .split('.')
    .filter((string) => !/^[-]?\d+$/.test(string))
    .join('.');
};

export const generateApiPath = (path: string, options?: { [key: string]: string }): string =>
  generatePath(path, options).replace(/\/$/, '');
