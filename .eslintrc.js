module.exports = {
  'extends': 'airbnb',
  plugins: ['react', 'jsx-a11y', 'import'],
  env: {
    mocha: true
  },
  globals: {
    window: true,
    document: true
  },
  rules: {
    'semi': ['error', 'never'],
    'comma-dangle': ['error', 'never'],
    'import/no-extraneous-dependencies': 0,
    'import/no-unresolved': 0,
    'import/extensions': 0,
    'import/first': 0,
    'import/prefer-default-export': 0
  }
};
