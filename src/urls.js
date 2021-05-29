export const appUrls = {
  portal: {
    signIn: '/sign-in',
    signUp: '/sign-up',
    passwordRecovery: '/recovery-password',
  },
  app: {
    dashboard: '/app/',
    signOut: '/app/sign-out',
    competition: '/app/competition',
    competitions: '/app/competitions',
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
    competition: '/competition',
    getCompetitions: '/competition?token=:token',
  },
};
