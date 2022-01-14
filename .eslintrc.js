module.exports = {
  root: true,
  parser: 'vue-eslint-parser',
  env: {
    browser: true,
    node: true,
    es2015: true,
  },
  plugins: ['prettier'],
  extends: ['plugin:prettier/recommended', 'plugin:gridsome/recommended'],
}
