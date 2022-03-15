const customMediaQuery = (width: number, type: 'min' | 'max'): string => `@media (${type}-width: ${width}px)`;

export const media = {
  custom: customMediaQuery,
  xs: customMediaQuery(575, 'max'),
  sm: customMediaQuery(767, 'max'),
  md: customMediaQuery(991, 'max'),
  lg: customMediaQuery(1199, 'max'),
  xl: customMediaQuery(1200, 'min'),
};
