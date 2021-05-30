export const appUrls = {
  portal: {
    signIn: '/sign-in',
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
  portal: {
    signUp: '/user',
    signIn: '/sign-in',
    passwordRecovery: '/recovery-password',
    passwordChange: '/recovery-password',
    accountActivation: '/account-activation',
    getUser: '/user?token=:token',
  },
};
