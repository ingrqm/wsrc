export default {
  form: {
    passRecovery: {
      title: 'odzyskiwanie hasła',
      input: {
        email: {
          label: 'adres e-mail',
          validation: {
            email: 'niepoprawny adres e-mail',
            required: 'adres e-mail jest wymagany',
          },
        },
      },
      button: {
        label: 'przypomnij hasło',
      },
      messages: {
        failed: 'nie ma użytkownika o podanym adresie e-mail',
        success: 'wysłano na adres e-mail link do zmiany hasła',
      },
    },
    signIn: {
      title: 'logowanie',
      input: {
        email: {
          label: 'adres e-mail',
          validation: {
            email: 'niepoprawny adres e-mail',
            required: 'adres e-mail jest wymagany',
          },
        },
        password: {
          label: 'hasło',
          validation: {
            min: 'hasło musi mieć conajmniej 5 znaków',
            required: 'hasło jest wymagane',
          },
        },
      },
      button: {
        label: 'zaloguj się',
      },
      messages: {
        failed: 'niepoprawne dane logowania',
        success: 'logowanie udało się, zaraz nastąpi przekierowanie do panelu',
      },
    },
  },
};
