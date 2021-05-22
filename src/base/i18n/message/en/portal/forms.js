export default {
  form: {
    passRecovery: {
      title: 'recovery password',
      input: {
        email: {
          label: 'e-mail adress',
          validation: {
            email: 'incorrect e-mail adress',
            required: 'e-mail adress is required',
          },
        },
      },
      button: {
        label: 'recovery password',
      },
      messages: {
        failed: 'there is no user with the given e-mail address',
        success: 'a link to change the password has been sent to the e-mail address',
      },
    },
    signIn: {
      title: 'sign in',
      input: {
        email: {
          label: 'e-mail adress',
          validation: {
            email: 'incorrect e-mail adress',
            required: 'e-mail adress is required',
          },
        },
        password: {
          label: 'password',
          validation: {
            min: 'password must contain at least 5 chars',
            required: 'password is required',
          },
        },
      },
      button: {
        label: 'sign in',
      },
      messages: {
        failed: 'incorrect sign in data',
        success: 'sign in is success, you will be redirected to the panel in a moment',
      },
    },
  },
};
