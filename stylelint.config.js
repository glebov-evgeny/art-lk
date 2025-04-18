module.exports = {
  extends: ['stylelint-config-standard-scss', 'stylelint-config-standard'],
  // add your custom config here
  // https://stylelint.io/user-guide/configuration
  customSyntax: 'postcss-scss',
  ignoreFiles: ['**/*.js', '**/*.ts', '**/*.jsx', '**/*.tsx', '**/*.vue'],
  rules: {
    'at-rule-no-unknown': null,
    'selector-pseudo-element-no-unknown': [
      true,
      {
        ignorePseudoElements: ['v-deep'],
      },
    ],
    'declaration-property-value-no-unknown': null,
    'at-rule-empty-line-before': null,
    'import-notation': null,
    'no-descending-specificity': null,
    'property-no-vendor-prefix': null,
    'selector-class-pattern': null,
    'alpha-value-notation': null,
    'color-function-alias-notation': null,
    'color-function-notation': null,
    'declaration-block-no-redundant-longhand-properties': null,
  },
};
