export default {
  form: {
    signIn: {
      title: 'logowanie',
      input: {
        email: {
          label: 'Adres e-mail',
          validation: {
            email: 'Niepoprawny adres e-mail',
            required: 'Adres e-mail jest wymagany',
          },
        },
        password: {
          label: 'Hasło',
          validation: {
            min: 'Hasło musi mieć conajmniej 5 znaków',
            required: 'Hasło jest wymagane',
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
