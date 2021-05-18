export const jsonToPair = (data, prefix = '', elements = {}) => {
  const keys = Object.keys(data);
  const values = Object.values(data);

  if (typeof data === 'string') {
    elements[prefix] = data;
  } else {
    values.map((element, i) => jsonToPair(element, `${prefix && `${prefix}.`}${keys[i]}`, elements));
  }

  return elements;
};
