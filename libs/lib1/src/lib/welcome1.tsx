import { css, Theme, useTheme } from '@emotion/react';
import { useTranslation } from 'next-i18next';

/* eslint-disable-next-line */
export interface Welcome1Props {}

const welcomeStyle = (theme: Theme) =>
  css({
    color: theme.color.primary,
  });

const logoStyle = () =>
  css({
    width: '100px',
    height: '100px',
  });

export function Welcome1(props: Welcome1Props) {
  const {
    icons: { team: TeamLogo },
  } = useTheme();
  const { t } = useTranslation(['common', 'lib1']);

  return (
    <div css={welcomeStyle}>
      <TeamLogo css={logoStyle} title="Work as team"></TeamLogo>
      <h1>welcome to Lib1!</h1>
      <div>Translated value {t('welcome-lib', { ns: 'lib1' })}</div>
      <div>Translated value {t('thanks')}</div>
    </div>
  );
}

export default Welcome1;
