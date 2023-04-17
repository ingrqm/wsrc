import { generateApiPath } from 'utils/path';

const API_URL = `https://api.wsrc.app`;

export const appRoutes = {
  base: '/',
  app: {
    base: 'app',
    dashboard: 'dashboard',
    results: 'results',
    users: 'users',
    personalData: 'personal-data',
  },
  championship: {
    base: 'championship',
    reading: 'reading',
    test: 'test',
    review: 'review/:id',
  },
  auth: {
    base: 'auth',
    signUp: 'sign-up',
    signIn: 'sign-in',
    passwordRemind: 'password-remind',
    passwordRecovery: 'password-recovery',
  },
  document: {
    base: 'document',
    statute: 'statute',
  },
  error: {
    base: 'error',
    notFound: 'not-found',
    notAuthorized: 'not-authorized',
  },
};

export const appUrls = {
  app: {
    dashboard: `/${appRoutes.app.base}/${appRoutes.app.dashboard}`,
    results: `/${appRoutes.app.base}/${appRoutes.app.results}`,
    users: `/${appRoutes.app.base}/${appRoutes.app.users}`,
    personalData: `/${appRoutes.app.base}/${appRoutes.app.personalData}`,
  },
  championship: {
    reading: `/${appRoutes.championship.base}/${appRoutes.championship.reading}`,
    test: `/${appRoutes.championship.base}/${appRoutes.championship.test}`,
    review: `/${appRoutes.championship.base}/${appRoutes.championship.review}`,
  },
  auth: {
    signIn: `/${appRoutes.auth.base}/${appRoutes.auth.signIn}`,
    signUp: `/${appRoutes.auth.base}/${appRoutes.auth.signUp}`,
    passwordRemind: `/${appRoutes.auth.base}/${appRoutes.auth.passwordRemind}`,
    passwordRecovery: `/${appRoutes.auth.base}/${appRoutes.auth.passwordRecovery}`,
  },
  document: {
    statute: `/${appRoutes.document.base}/${appRoutes.document.statute}`,
  },
  error: {
    notFound: `/${appRoutes.error.base}/${appRoutes.error.notFound}`,
    notAuthorized: `/${appRoutes.error.base}/${appRoutes.error.notAuthorized}`,
  },
};

export const apiUrls = {
  auth: {
    activation: `${API_URL}/auth/activation`,
    signIn: `${API_URL}/auth/sign-in`,
    signUp: `${API_URL}/auth/sign-up`,
    logout: `${API_URL}/auth/logout`,
    passwordRemind: `${API_URL}/auth/password-remind`,
    passwordRecovery: `${API_URL}/auth/password-recovery`,
    passwordReset: `${API_URL}/auth/password-reset`,
  },
  championship: {
    startCompetition: `${API_URL}/championship/start-competition`,
    startTest: `${API_URL}/championship/start-test`,
    endCompetition: `${API_URL}/championship/end-competition`,
  },
  statistics: {
    dashboard: `${API_URL}/statistics/dashboard`,
  },
  arbiters: (id: string = '') => `${API_URL}/${generateApiPath('arbiters/:id', { id })}`,
  reviews: (id: string = '') => `${API_URL}/${generateApiPath('reviews/:id', { id })}`,
  results: (id: string = '') => `${API_URL}/${generateApiPath('results/:id', { id })}`,
  users: (id: string = '') => `${API_URL}/${generateApiPath('users/:id', { id })}`,
  logs: (id: string = '') => `${API_URL}/${generateApiPath('logs/:id', { id })}`,
};

export const outerUrls = {};
