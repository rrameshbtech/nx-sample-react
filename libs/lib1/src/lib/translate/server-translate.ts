import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { UserConfig } from 'next-i18next';
import defaultConfig from './next-i18next.config.default';

export function enableServerTranslations(
  lang: string,
  ns: string[],
  customConfigs?: UserConfig
) {
  const config = override(defaultConfig, customConfigs);

  return serverSideTranslations(lang, ns, config);
}

function override(baseConfig: UserConfig, customConfig?: UserConfig) {
  if(!customConfig) {
    return baseConfig;
  }

  return {
    ...baseConfig,
    ...customConfig,
  };
}
