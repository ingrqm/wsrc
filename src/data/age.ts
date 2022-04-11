export const ageOptions = Array.from({ length: 94 })
  .map((_, index) => index + 6)
  .map((age) => ({ value: age, label: age }));
