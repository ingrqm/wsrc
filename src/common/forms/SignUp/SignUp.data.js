import { CountryRegionData } from 'react-country-region-selector';

import { continents, countries } from 'countries-list';

const getContinentList = () => {
  return Object.values(continents).map((item) => item);
};

const getCountryList = () => {
  const data = [];

  Object.values(countries).map((item, index) => {
    data[index] = item;
  });

  Object.keys(countries).map((item, index) => {
    data[index]['code'] = item;
  });

  const list = {};

  Object.keys(continents).map((continent) => {
    list[continents[continent]] = data.filter((country) => country.continent === continent);
  });

  return list;
};

const getRegionList = () => {
  const list = {};

  CountryRegionData.map((item) => {
    list[item[1]] = item[2].split('|').map((item) => item.split('~')[0]);
  });

  return list;
};

const getAgeList = () => {
  const list = Array.from({ length: 94 }).map((_, index) => `${index + 6}`);

  return list;
};

const getLanguageList = () => {
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
      flag: 'DE',
      code: 'DE',
      name: 'Deutsche',
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

const continentList = getContinentList();

const countryList = getCountryList();

const regionList = getRegionList();

const ageList = getAgeList();

const languageList = getLanguageList();

export { ageList, continentList, countryList, regionList, languageList };
