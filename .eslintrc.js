module.exports = {
  root: true,
  env: {
    browser: true,
    es6: true,
  },
  parser: '@typescript-eslint/parser',
  extends: [
    'react-app',
    'airbnb',
    'plugin:jsx-a11y/recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
  ],
  plugins: ['react', '@typescript-eslint', 'jsx-a11y', 'prettier'],
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
    'react/jsx-filename-extension': [1, { extensions: ['.ts', '.tsx'] }],
    '@typescript-eslint/explicit-function-return-type': [
      'error',
      {
        allowExpressions: true,
      },
    ],
    '@typescript-eslint/no-explicit-any': 'error',
    '@typescript-eslint/no-unused-vars': 'error',
    '@typescript-eslint/camelcase': 'off',
    '@typescript-eslint/no-empty-interface': 'off',
    'no-var': 'error',
    'no-console': 'warn',
    'no-unused-expressions': ['error', { allowTernary: true }],
    'import/no-unresolved': 'off',
    'import/extensions': 'off',
    'react-hooks/exhaustive-deps': 'off',
    'import/order': [
      'error',
      {
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
        groups: ['builtin', 'external', 'internal', 'index', 'parent', 'sibling'],
        pathGroups: [
          {
            pattern: '{react,react/**,react**}',
            group: 'builtin',
            position: 'before',
          },
          {
            pattern: '{next,next/**,next**}',
            group: 'builtin',
            position: 'before',
          },
          {
            pattern: '{@providers,@providers/**}',
            group: 'external',
            position: 'before',
          },
          {
            pattern: '{@redux,@redux/**}',
            group: 'external',
            position: 'before',
          },
          {
            pattern: '{@utils,@utils/**}',
            group: 'external',
            position: 'before',
          },
          {
            pattern: '{@contracts,@contracts/**}',
            group: 'external',
            position: 'before',
          },
          {
            pattern: '{@types,@types/**}',
            group: 'external',
            position: 'before',
          },
          {
            pattern: '{@enums,@enums/**}',
            group: 'external',
            position: 'before',
          },
          {
            pattern: 'urls',
            group: 'external',
            position: 'before',
          },
          {
            pattern: 'i18n',
            group: 'external',
            position: 'before',
          },
          {
            pattern: '{@material-ui,@material-ui/**}',
            group: 'external',
            position: 'before',
          },
          {
            pattern: '{@layouts,@layouts/**}',
            group: 'external',
            position: 'after',
          },
          {
            pattern: '{@views,@views/**,@views/**/**,@views/**/**/**}',
            group: 'external',
            position: 'after',
          },
          {
            pattern: '{@forms,@forms/**}',
            group: 'external',
            position: 'after',
          },
          {
            pattern: '{@components,@components/**}',
            group: 'external',
            position: 'after',
          },
          {
            pattern: './**.api',
            group: 'sibling',
            position: 'after',
          },
          {
            pattern: './**.schema',
            group: 'sibling',
            position: 'after',
          },
          {
            pattern: './**.types',
            group: 'sibling',
            position: 'after',
          },
          {
            pattern: './**.enums',
            group: 'sibling',
            position: 'after',
          },
          {
            pattern: './**.styled',
            group: 'sibling',
            position: 'after',
          },
          {
            pattern: 'assets/**',
            group: 'sibling',
            position: 'after',
          },
        ],
        pathGroupsExcludedImportTypes: ['builtin'],
      },
    ],
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': ['error'],
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': 'off',
    'import/no-cycle': 'error',
    'no-plusplus': 'off',
    'import/prefer-default-export': 'off',
    camelcase: 'off',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  ignorePatterns: [
    'src/serviceWorker.ts',
    'src/types/*',
    '.vscode/*',
    'build/*',
    'node_modules/*',
    'react-app-env.d.ts',
  ],
};
