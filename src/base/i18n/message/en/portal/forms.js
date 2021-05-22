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
          label: 'nazwa ekipy',
          validation: {
            required: 'nazwa ekipy jest wymagana',
            min: 'nazwa ekipy musi mieć conajmniej 2 znaki',
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
          label: 'e-mail adress',
          validation: {
            email: 'incorrect adres e-mail',
            required: 'e-mail adress is required',
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
          label: 'powtórz hasło',
          validation: {
            min: 'password must contain at least 5 chars',
            specialCharacter: 'password must contain at least 1 special character',
            match: 'passwords must match',
            required: 'password is required',
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
        failed: 'error occured',
        success: 'a link to activate the account was sent to the e-mail address',
      },
    },
  },
};
