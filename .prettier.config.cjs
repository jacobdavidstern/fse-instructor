/** @type {import("prettier").Config} */
module.exports = {
  plugins: ['@awmottaz/prettier-plugin-void-html'],
  singleQuote: true,
  semi: true,
  trailingComma: 'none',
  printWidth: 96,
  htmlWhitespaceSensitivity: 'ignore',
  overrides: [
    {
      files: '**/*.html', // covers nested folders too
      options: {
        singleAttributePerLine: false,
        bracketSameLine: true,
        parser: 'html'
      }
    }
  ]
};
