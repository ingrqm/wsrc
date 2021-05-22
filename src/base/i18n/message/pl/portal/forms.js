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
            specialCharacter: 'hasło musi zawierać conajmniej 1 znak specjalny',
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
    signUp: {
      title: 'rejestracja',
      input: {
        continent: {
          label: 'kontynent',
          validation: {
            required: 'kontynent jest wymagany',
          },
        },
        country: {
          label: 'kraj',
          validation: {
            required: 'kraj jest wymagany',
          },
        },
        region: {
          label: 'region',
          validation: {
            required: 'region jest wymagany',
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
          label: 'język zawodów',
          validation: {
            required: 'język zawodów jest wymagany',
          },
        },
        name: {
          label: 'imię',
          validation: {
            required: 'imię jest wymagane',
            min: 'imię musi posiadać conajmniej 2 znaki',
          },
        },
        surname: {
          label: 'nazwisko',
          validation: {
            required: 'nazwisko jest wymagane',
            min: 'nazwisko musi posiadać conajmniej 2 znaki',
          },
        },
        age: {
          label: 'wiek',
          validation: {
            required: 'wiek jest wymagany',
          },
        },
        phone: {
          label: 'numer telefonu',
          validation: {
            required: 'numer telefonu jest wymagany',
          },
        },
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
            specialCharacter: 'hasło musi zawierać conajmniej 1 znak specjalny',
            required: 'hasło jest wymagane',
          },
        },
        replyPassword: {
          label: 'powtórz hasło',
          validation: {
            min: 'hasło musi mieć conajmniej 5 znaków',
            specialCharacter: 'hasło musi zawierać conajmniej 1 znak specjalny',
            match: 'hasła muszą być takie same',
            required: 'hasło jest wymagane',
          },
        },
        statute: {
          label: 'akceptuje regulamin',
          validation: {
            required: 'zaakceptuj regulamin',
          },
        },
      },
      button: {
        label: 'zarejestruj się',
      },
      messages: {
        failed: 'wystąpił błąd',
        success: 'wysłano na adres e-mail link do aktywacji konta',
      },
    },
  },
};
