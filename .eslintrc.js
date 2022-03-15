module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:react/recommended', 'airbnb', 'prettier'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint', 'prettier'],
  rules: {
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        jsxSingleQuote: true,
        semi: true,
        printWidth: 120,
      },
    ],
    'no-shadow': 'off',
    'import/extensions': 'off',
    'import/no-unresolved': 'off',
    'import/prefer-default-export': 'off',
    'react/react-in-jsx-scope': 'off',
    'jsx-a11y/anchor-is-valid': 'off',
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': [
      'warn',
      {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
        caughtErrorsIgnorePattern: '^_',
      },
    ],
    'react/function-component-definition': 'off',
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],
    'import/order': [
      'error',
      {
        'newlines-between': 'never',
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
        groups: ['builtin', 'external', 'internal', 'index', 'parent', 'sibling'],
        pathGroups: [
          {
            pattern: '{react,react**}',
            group: 'builtin',
            position: 'before',
          },
          {
            pattern: '{urls}',
            group: 'external',
            position: 'after',
          },
          {
            pattern: '{utils,utils/**}',
            group: 'external',
            position: 'after',
          },
          {
            pattern: '{redux,redux/**}',
            group: 'external',
            position: 'after',
          },
          {
            pattern: '{hooks}',
            group: 'external',
            position: 'after',
          },
          {
            pattern: '{views,views/**}',
            group: 'external',
            position: 'after',
          },
          {
            pattern: '{forms,forms/**}',
            group: 'external',
            position: 'after',
          },
          {
            pattern: '{components,components/**}',
            group: 'external',
            position: 'after',
          },
          {
            pattern: '{**.data}',
            group: 'sibling',
            position: 'after',
          },
          {
            pattern: '{styles,styles/**}',
            group: 'sibling',
            position: 'after',
          },
          {
            pattern: '{**.styled}',
            group: 'sibling',
            position: 'after',
          },
          {
            pattern: '{assets/**}',
            group: 'sibling',
            position: 'after',
          },
        ],
        pathGroupsExcludedImportTypes: ['builtin'],
      },
    ],
  },
};
