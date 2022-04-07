import Flags from 'country-flag-icons/react/3x2';
import { StyledFlag } from 'components/language-picker/language-picker.styled';
import { LanguageChampionship } from './sign-up.enum';

export const languages = [
  {
    flag: Flags.AR,
    language: LanguageChampionship.ar,
    label: 'عربي',
  },
  {
    flag: Flags.DE,
    language: LanguageChampionship.de,
    label: 'deutsch',
  },
  {
    flag: Flags.GB,
    language: LanguageChampionship.en,
    label: 'english',
  },
  {
    flag: Flags.ES,
    language: LanguageChampionship.es,
    label: 'español',
  },
  {
    flag: Flags.FR,
    language: LanguageChampionship.fr,
    label: 'français',
  },
  {
    flag: Flags.IT,
    language: LanguageChampionship.it,
    label: 'italiano',
  },
  {
    flag: Flags.PL,
    language: LanguageChampionship.pl,
    label: 'polski',
  },
  {
    flag: Flags.PT,
    language: LanguageChampionship.pt,
    label: 'português',
  },
  {
    flag: Flags.RU,
    language: LanguageChampionship.ru,
    label: 'pусский',
  },
];

export const languageOptions = languages.map(({ flag: Flag, label, language }) => ({
  label: (
    <StyledFlag>
      <Flag />
      {label}
    </StyledFlag>
  ),
  value: language,
}));

export const ageOptions = Array.from({ length: 94 })
  .map((_, index) => index + 6)
  .map((age) => ({ value: age, label: age }));
