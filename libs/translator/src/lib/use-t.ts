import { keys as commonTrans } from '../locales/en/common';
import { keys as appTrans } from '../locales/en/app';
import { keys as featureTrans } from '../locales/en/feature';
import { useTranslation } from 'next-i18next';

export function useT<SelectedNamespaces>(namespaces : string | string[]) {
  const emptyObject = {};

  type commonType = 'common';
  type appType = 'app';
  type featureType = 'feature';

  type EmptyKeys = keyof typeof emptyObject;
  type CommonKeys = keyof typeof commonTrans;
  type AppKeys = keyof typeof appTrans;
  type FeatureKeys = keyof typeof featureTrans;

  type MergeKeysOf<NameSpace, NSKeysType, ExistingKeysType> =
    NameSpace extends SelectedNamespaces
      ? ExistingKeysType | NSKeysType
      : ExistingKeysType;

  type allKeys1 = MergeKeysOf<commonType, CommonKeys, EmptyKeys>;
  type allKeys2 = MergeKeysOf<appType, AppKeys, allKeys1>;
  type allKeys3 = MergeKeysOf<featureType, FeatureKeys, allKeys2>;

  const { t } = useTranslation(namespaces);

  return (key: allKeys3) => t(key);
}

export function Test() {

  type selectedNS = 'common' | 'app' | 'feature';
  const translate = useT<selectedNS>(['common']);

  return translate('welcome');
}