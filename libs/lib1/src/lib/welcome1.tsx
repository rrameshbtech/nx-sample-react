import { css, Theme, useTheme } from '@emotion/react';
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

  return (
    <div css={welcomeStyle}>
      <TeamLogo css={logoStyle} title="Work as team"></TeamLogo>
      <h1>Welcome to Lib1!</h1>
    </div>
  );
}

export default Welcome1;
