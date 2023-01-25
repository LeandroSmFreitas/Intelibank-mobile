module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', 'react-hooks', '@typescript-eslint'],
  parserOptions: {
    project: ['./tsconfig.json'],
  },
  rules: {
    '@typescript-eslint/no-empty-interface': 'off',
    '@typescript-eslint/no-unsafe-assignment': 'off',
    '@typescript-eslint/no-misused-promises': 'off',
    'react-hooks/exhaustive-deps': 'off',
    'no-console': ['warn'],
    '@typescript-eslint/no-floating-promises': ['warn'],
    '@typescript-eslint/no-floating-promises': ['warn'],
    '@typescript-eslint/no-floating-promises': ['warn'],
    '@typescript-eslint/no-confusing-non-null-assertion': ['warn'],
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  ignorePatterns: ['src/infrastructure/reactotron/*'],
};module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', 'react-hooks', '@typescript-eslint'],
  parserOptions: {
    project: ['./tsconfig.json'],
  },
  rules: {
    '@typescript-eslint/no-empty-interface': 'off',
    '@typescript-eslint/no-unsafe-assignment': 'off',
    '@typescript-eslint/no-misused-promises': 'off',
    'react-hooks/exhaustive-deps': 'off',
    'no-console': ['warn'],
    '@typescript-eslint/no-floating-promises': ['warn'],
    '@typescript-eslint/no-floating-promises': ['warn'],
    '@typescript-eslint/no-floating-promises': ['warn'],
    '@typescript-eslint/no-confusing-non-null-assertion': ['warn'],
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  ignorePatterns: ['src/infrastructure/reactotron/*'],
};
