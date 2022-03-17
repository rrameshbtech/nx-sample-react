// import the original type declarations
import 'react-i18next';
// import all namespaces (for the default language, only)
import app from '../apps/my-new-app/public/locales/en/app.json';
import common from '../libs/translator/src/locales/en/common.json';
import lib1 from '../libs/lib1/src/locales/en/lib1.json';

// react-i18next versions higher than 11.11.0
declare module 'react-i18next' {
  // and extend them!
  interface CustomTypeOptions {
    // custom namespace type if you changed it
    defaultNS: 'common';
    // custom resources type
    resources: {
      "app": typeof app;
      "common": typeof common;
      "lib1": typeof lib1
    };
  };
};