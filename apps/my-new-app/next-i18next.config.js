const path = require('path');

module.exports = {
  i18n: {
    defaultLocale: 'de',
    locales: ['en', 'de'],
  },
  ns: ["common", "lib1"],
  debug: true,
  serializeConfig:false,
  localePath: path.resolve('./apps/my-new-app/public/locales/'),
  localeStructure: '{{lng}}/{{ns}}'
};