export default {
  page: {
    passwordRecovery: {
      actions: {
        signIn: 'Do you have an account?',
      },
    },
    signIn: {
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
      actions: {
        signIn: 'Do you have an account?',
      },
    },
  },
};
