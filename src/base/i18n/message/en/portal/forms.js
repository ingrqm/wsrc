export default {
  form: {
    passRecovery: {
      title: 'recovery password',
      input: {
        email: {
          label: 'e-mail address',
          validation: {
            email: 'incorrect e-mail address',
            required: 'e-mail address is required',
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
          label: 'e-mail address',
          validation: {
            email: 'incorrect e-mail address',
            required: 'e-mail address is required',
          },
        },
        password: {
          label: 'password',
          validation: {
            min: 'password must contain at least 5 chars',
            specialCharacter: 'password must contain at least 1 special character',
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
    signUp: {
      title: 'sign up',
      input: {
        continent: {
          label: 'continent',
          validation: {
            required: 'continent is required',
          },
        },
        country: {
          label: 'country',
          validation: {
            required: 'country is required',
          },
        },
        region: {
          label: 'region',
          validation: {
            required: 'region is required',
          },
        },
        crew: {
          label: 'crew name',
          validation: {
            required: 'crew name is required',
            min: 'crew name must contain at least 2 chars',
          },
        },
        language: {
          label: 'language',
          validation: {
            required: 'language is required',
          },
        },
        name: {
          label: 'name',
          validation: {
            required: 'name is required',
            min: 'name must contain at least 2 chars',
          },
        },
        surname: {
          label: 'surname',
          validation: {
            required: 'surname is required',
            min: 'surname must contain at least 2 chars',
          },
        },
        age: {
          label: 'age',
          validation: {
            required: 'age is required',
          },
        },
        phone: {
          label: 'phone number',
          validation: {
            required: 'phone number is required',
          },
        },
        email: {
          label: 'e-mail address',
          validation: {
            email: 'incorrect address e-mail',
            required: 'e-mail address is required',
          },
        },
        password: {
          label: 'password',
          validation: {
            min: 'password must contain at least 5 chars',
            specialCharacter: 'password must contain at least 1 special character',
            required: 'password is required',
          },
        },
        replyPassword: {
          label: 'reply password',
          validation: {
            min: 'reply password must contain at least 5 chars',
            specialCharacter: 'reply password must contain at least 1 special character',
            match: 'reply passwords must match',
            required: 'reply password is required',
          },
        },
        statute: {
          label: 'I accept statute',
          validation: {
            required: 'you must accept statute',
          },
        },
      },
      button: {
        label: 'sign up',
      },
      messages: {
        failed: 'error occurred',
        success: 'a link to activate the account was sent to the e-mail address',
      },
    },
  },
};
