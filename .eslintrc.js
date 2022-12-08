module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  env: { es6: true },
  extends: ['prettier'],
  rules: {
    'react-hooks/exhaustive-deps': 'off',
  },
};
