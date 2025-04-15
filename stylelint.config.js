module.exports = {
  extends: ['stylelint-config-standard-scss'],
  // add your custom config here
  // https://stylelint.io/user-guide/configuration
  rules: {
    'at-rule-no-unknown': null,
    'selector-pseudo-element-no-unknown': [
      true,
      {
        ignorePseudoElements: ['v-deep'],
      },
    ],
  },
};

module.exports = {
  extends: ['stylelint-config-standard-scss'],
  plugins: ['stylelint-order', 'stylelint-prettier'],
  rules: {
    'prettier/prettier': true,
    'order/properties-order': [], // можно настроить, если хочешь сортировку свойств
    'selector-pseudo-element-no-unknown': [
      true,
      {
        ignorePseudoElements: ['v-deep'],
      },
    ],
  },
  ignoreFiles: ['**/node_modules/**', '**/.output/**', '**/.nuxt/**'],
};
