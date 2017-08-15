module.exports = {
  parser: 'babel-eslint',
  extends: ['yoctol', 'prettier'],
  env: {
    node: true,
    jest: true,
    jasmine: true,
  },
  plugins: ['prettier'],
  rules: {
    'consistent-return': 'off',
    'no-param-reassign': 'off',
    'prettier/prettier': [
      'error',
      {
        trailingComma: 'es5',
        singleQuote: true,
      },
    ],
  },
};
