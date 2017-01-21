module.exports = {
  root: true,
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module'
  },
  parser: 'babel-eslint',
  extends: [
    'eslint:recommended',
    require.resolve('eslint-config-airbnb-base/rules/es6'),
    require.resolve('eslint-config-airbnb-base/rules/style'),
    require.resolve('eslint-config-airbnb-base/rules/variables'),
  ],
  env: {
    'browser': true
  },
  rules: {
    'func-names': 0,
    'arrow-parens': 2,
    'constructor-super': 2,
    'no-this-before-super': 2,
    'newline-before-return': 2,
    'import/no-unresolved': 0,
    'prefer-rest-params': 0
  },
};
