module.exports = {
  extends: [
    'eslint-config-rtablada',
  ].map(require.resolve),

  'parserOptions': {
    'sourceType': 'script',
    'ecmaFeatures': {
    },
  },

  rules: {
    'func-names': [0],
    'no-unused-vars': [2, {
      'vars': 'local',
      'args': 'after-used'
    }],
    'prefer-arrow-callback': 0,
  },
};
