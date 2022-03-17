const API_URL = `https://api.wsrc.app`;

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
  },
  auth: {
    signIn: `/${appRoutes.auth.base}/${appRoutes.auth.signIn}`,
    signUp: `/${appRoutes.auth.base}/${appRoutes.auth.signUp}`,
    passwordRemind: `/${appRoutes.auth.base}/${appRoutes.auth.passwordRemind}`,
  },
  document: {
    statute: `/${appRoutes.document.base}/${appRoutes.document.statute}`,
  },
  error: {
    notFound: `/${appRoutes.error.base}/${appRoutes.error.notFound}`,
  },
};

export const apiUrls = {
  auth: {
    activation: `${API_URL}/auth/activation`,
    signIn: `${API_URL}/auth/sign-in`,
    signInToken: `${API_URL}/auth/sign-in-token`,
    logout: `${API_URL}/auth/logout`,
    passwordRemind: `${API_URL}/auth/password-remind`,
    passwordRecovery: `${API_URL}/auth/password-recovery`,
    verifyPasswordToken: `${API_URL}/auth/password-token`,
  },
};

export const outerUrls = {};
