module.exports = {
  extends: ['stylelint-config-recommended-vue', 'stylelint-config-prettier'],
  ignoreFiles: ['src/index.html'],
  rules: {
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: ['apply', 'variants', 'screen', 'layer']
      }
    ],
    'declaration-block-trailing-semicolon': null,
    'no-descending-specificity': null,
  }
}
