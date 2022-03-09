import { appWithTranslation, UserConfig } from 'next-i18next';
import { AppProps } from 'next/dist/shared/lib/router/router';
import defaultConfig from './next-i18next.config.default';

export function initI18N(
  myApp: (props: AppProps) => JSX.Element,
  customConfigs?: UserConfig
) {
  const config = override(defaultConfig, customConfigs);
  return appWithTranslation(myApp, config);
}
export { useTranslation } from 'next-i18next';


function override(baseConfig: UserConfig, customConfig?: UserConfig) {
  if(!customConfig) {
    return baseConfig;
  }

  return {
    ...baseConfig,
    ...customConfig,
  };
}