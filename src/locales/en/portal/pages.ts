export default {
  page: {
    passwordChange: {
      head: {
        title: 'Password change',
      },
    },
    passwordRecovery: {
      head: {
        title: 'Password recovery',
      },
      actions: {
        signIn: 'Do you have an account?',
      },
    },
    signIn: {
      head: {
        title: 'Sign in',
      },
      actions: {
        passwordRecovery: 'Have you forgotten your password?',
        signUp: 'You do not have an account?',
      },
      messages: {
        failed: 'An error occurred while activating the account',
        success: 'The account has been activated',
      },
    },
    signUp: {
      head: {
        title: 'Sign up',
      },
      actions: {
        signIn: 'Do you have an account?',
      },
    },
  },
};
