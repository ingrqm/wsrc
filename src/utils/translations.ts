type JsonObject =
  | {
      [key: string]: string | JsonObject;
    }
  | string;

type PairObject = {
  [key: string]: string;
};

const jsonToPair = (data: JsonObject, prefix = '', translations: PairObject = {}): PairObject => {
  const keys = Object.keys(data);
  const values = Object.values(data);

  if (typeof data === 'string') {
    // eslint-disable-next-line no-param-reassign
    translations[prefix] = data;
  } else {
    values.map((translation, i) => jsonToPair(translation, `${prefix && `${prefix}.`}${keys[i]}`, translations));
  }

  return translations;
};

export const getTranslations = (object: JsonObject): PairObject => jsonToPair(object);
