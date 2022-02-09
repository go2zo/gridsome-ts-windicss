module.exports = {
  root: true,
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: 'babel-eslint',
    sourceType: 'module',
    ecmaVersion: 2018
  },
  env: {
    browser: true,
    node: true,
    es2015: true,
  },
  plugins: ['prettier'],
  extends: [
    'eslint:recommended',
    'plugin:vue/recommended',
    'plugin:gridsome/recommended'
  ],
  rules: {
    'vue/multi-word-component-names': 'off',
    'rest-spread-spacing': ["error", "never"]
  }
}
