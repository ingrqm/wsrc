import Flags from 'country-flag-icons/react/3x2';
import { LanguageApp, LanguageChampionship } from 'enums';
import { StyledFlag } from 'components/language-picker/language-picker.styled';

export const languagesApp = [
  {
    flag: Flags.GB,
    language: LanguageApp.en,
    label: 'english',
  },
];

export const languagesChampionship = [
  {
    flag: Flags.AR,
    language: LanguageChampionship.ar,
    label: 'عربي',
  },
  // {
  //   flag: Flags.DE,
  //   language: LanguageChampionship.de,
  //   label: 'deutsch',
  // },
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
  // {
  //   flag: Flags.IT,
  //   language: LanguageChampionship.it,
  //   label: 'italiano',
  // },
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
    flag: Flags.TR,
    language: LanguageChampionship.tr,
    label: 'türkçe',
  },
  // {
  //   flag: Flags.RU,
  //   language: LanguageChampionship.ru,
  //   label: 'pусский',
  // },
];

export const languageAppOptions = languagesApp.map(({ flag: Flag, label, language }) => ({
  label: (
    <StyledFlag>
      <Flag />
      {label}
    </StyledFlag>
  ),
  value: language,
}));

export const languageChampionshipOptions = languagesChampionship.map(({ flag: Flag, label, language }) => ({
  label: (
    <StyledFlag>
      <Flag />
      {label}
    </StyledFlag>
  ),
  value: language,
}));
