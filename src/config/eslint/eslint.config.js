module.exports = {
  extends: [].map(require.resolve),
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  ...require('@mparulski/es-project-eslint/rules/errors'),
}
