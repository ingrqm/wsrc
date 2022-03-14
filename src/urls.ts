export const appRoutes = {
  base: '/',
  app: {
    base: 'app',
    dashboard: 'dashboard',
    results: 'results',
    users: 'users',
  },
  championship: {
    base: 'championship',
    reading: 'reading',
    test: 'test',
    review: 'review',
  },
  auth: {
    base: 'auth',
    signUp: 'sign-up',
    signIn: 'sign-in',
    passwordRemind: 'remind',
    passwordRecovery: 'recovery',
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
  },
  auth: {
    signIn: `/${appRoutes.auth.base}/${appRoutes.auth.signIn}`,
  },
  error: {
    notFound: `/${appRoutes.error.base}/${appRoutes.error.notFound}`,
  },
};

export const apiUrls = {};

export const outerUrls = {};
