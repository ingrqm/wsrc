import { LanguageApp } from 'enums';
import { atom } from 'recoil';

type Config = {
  language: LanguageApp;
};

const localStorageConfig = localStorage.getItem('config');

export const defaultConfig: Config = localStorageConfig
  ? (JSON.parse(localStorageConfig) as Config)
  : {
      language: LanguageApp.en,
    };

export const configAtom = atom({
  key: 'config',
  default: defaultConfig,
  effects: [
    ({ onSet }) => {
      onSet((config) => {
        localStorage.setItem('config', JSON.stringify(config));
      });
    },
  ],
});
