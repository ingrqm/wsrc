import { CountryRegionData } from 'react-country-region-selector';

import { continents, countries } from 'countries-list';

import {
  AgeListTypes,
  ContinentListTypes,
  CountryListTypes,
  CountryTypes,
  LanguageListTypes,
  RegionListTypes,
} from './sign-up.types';

const getContinentList = (): ContinentListTypes =>
  Object.entries(continents).map((continent) => ({ code: continent[0], name: continent[1] }));

const getCountryList = (): CountryListTypes => {
  const data: CountryTypes[] = Object.values(countries).map((item) => item);

  Object.keys(countries).forEach((item, index) => {
    data[index].code = item;
  });

  return Object.fromEntries(
    Object.keys(continents).map((continent) => [
      continent,
      data.filter((country: CountryTypes) => country.continent === continent),
    ])
  );
};

const getRegionList = (): RegionListTypes =>
  Object.fromEntries(CountryRegionData.map((item) => [item[1], item[2].split('|').map((item) => item.split('~')[0])]));

const getAgeList = (): AgeListTypes => {
  const list = Array.from({ length: 94 }).map((_, index) => index + 6);

  return list;
};

const getLanguageList = (): LanguageListTypes => {
  const list = [
    {
      flag: 'CN',
      code: 'ZH',
      name: '欽斯基',
    },
    {
      flag: 'PL',
      code: 'PL',
      name: 'polski',
    },
    {
      flag: 'GB',
      code: 'EN',
      name: 'English',
    },
    {
      flag: 'FR',
      code: 'FR',
      name: 'français',
    },
    {
      flag: 'IT',
      code: 'IT',
      name: 'italiano',
    },
    {
      flag: 'PT',
      code: 'PT',
      name: 'português',
    },
    {
      flag: 'ES',
      code: 'ES',
      name: 'Español',
    },
    {
      flag: 'JP',
      code: 'JA',
      name: '日本語',
    },
    {
      flag: 'AR',
      code: 'AR',
      name: 'عربى',
    },
    {
      flag: 'RU',
      code: 'RU',
      name: 'русский',
    },
  ];

  return list;
};

export const continentList = getContinentList();

export const countryList = getCountryList();

export const regionList = getRegionList();

export const ageList = getAgeList();

export const languageList = getLanguageList();
