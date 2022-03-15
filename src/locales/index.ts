import { Language } from 'enums';
import en from './en';
import fr from './fr';
import pl from './pl';

export default {
  [Language.en]: {
    translation: en,
  },
  [Language.pl]: {
    translation: pl,
  },
  [Language.fr]: {
    translation: fr,
  },
};
