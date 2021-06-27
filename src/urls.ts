import urls from 'utils/urls';

const { API_URL } = urls;

export const appUrls = {
  portal: {
    signIn: `/sign-in`,
    signUp: '/sign-up',
    passwordRecovery: '/recovery-password',
  },
  app: {
    dashboard: '/app/',
    signOut: '/app/sign-out',
    competition: {
      init: '/app/competition/init',
      book: '/app/competition/book',
      test: '/app/competition/test',
    },
  },
};

export const outerUrls = {};

export const apiUrls = {
  ACCOUNT: {
    ACTIVATION: '/account/activation',
    SIGN_IN: `${API_URL}/account/sign-in`,
    SIGN_UP: '/account/sign-up',
    PASSWORD_CHANGE: 'account/password-change',
    PASSWORD_RECOVERY: '/account/password-recovery',
  },
  COMPETITION: `${API_URL}/competition`,
};
