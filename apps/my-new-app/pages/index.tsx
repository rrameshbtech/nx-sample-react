import { Theme, ThemeProvider } from '@emotion/react';
import styled from '@emotion/styled';
import { Welcome1 } from '@nx-sample-react/lib1';
import { ReactComponent as TeamLogo } from '../public/team.svg';
import { enableServerTranslations } from '@nx-sample-react/translator/server';
import config from 'next-i18next.config'
import { useTranslation } from 'next-i18next';

const StyledPage = styled.div`
  .page {
  }
`;

const defaultIcons = {};

const theme: Theme = {
  color: {
    primary: 'Blue',
  },
  icons: {
    ...defaultIcons,
    team: TeamLogo,
  },
};

export function Index() {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.@emotion/styled file.
   */
  const {t} = useTranslation("app");
  return (
    <ThemeProvider {...{ theme }}>
      <StyledPage>
        <div className="wrapper">
          <h1>Next JS Application</h1>
          <Welcome1></Welcome1>
          <h2>from app - {t("thanks")}</h2>
        </div>
      </StyledPage>
    </ThemeProvider>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await enableServerTranslations(locale, ['common', 'lib1', 'app'], config)),
      // Will be passed to the page component as props
    },
  };
}

export default Index;
