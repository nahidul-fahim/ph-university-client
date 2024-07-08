module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    'no-undef': 'error', // Adding the no-undef rule
    'no-unused-vars': 'warn', // Example of another custom rule
    'eqeqeq': 'error', // Example of enforcing strict equality
    '@typescript-eslint/no-explicit-any': 'warn', // Example of a TypeScript-specific rule
  },
}
