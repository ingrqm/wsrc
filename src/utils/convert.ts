export const snakeToCamelCase = (string: string): string =>
  string
    .split('_')
    .map((string, index) => (index !== 0 ? string[0].toUpperCase() + string.slice(1) : string))
    .join('');
