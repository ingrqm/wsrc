import { CountryRegionData } from 'react-country-region-selector';

import { continents, countries } from 'countries-list';

import {
  AgeListTypes,
  ContinentListTypes,
  CountryListTypes,
  LanguageListTypes,
  RegionListTypes,
} from './sign-up.types';

const getContinentList = (): ContinentListTypes => Object.values(continents).map((item) => item);

const getCountryList = (): CountryListTypes => {
  const data: CountryListTypes = Object.values(countries).map((item) => item);

  Object.keys(countries).forEach((item, index) => {
    data[index].code = item;
  });

  const list = {};

  Object.keys(continents).forEach((continent) => {
    list[continents[continent]] = data.filter((country) => country.continent === continent);
  });

  return list;
};

const getRegionList = (): RegionListTypes => {
  const list = {};

  CountryRegionData.forEach((item) => {
    list[item[1]] = item[2].split('|').map((item) => item.split('~')[0]);
  });

  return list;
};

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
