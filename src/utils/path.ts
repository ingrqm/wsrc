export const pathToCamelCase = (string: string): string => {
  const forbidden = ['/', ':', '.'];

  if (forbidden.includes(string)) return string;

  return string
    .replace('/', '')
    .replaceAll('/', '.')
    .split('-')
    .map((string) => (string.includes('.') ? string : string[0].toUpperCase() + string.slice(1)))
    .join('');
};
