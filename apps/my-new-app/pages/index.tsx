import { Theme, ThemeProvider } from '@emotion/react';
import styled from '@emotion/styled';
import { Welcome1 } from '@nx-sample-react/lib1';
import { ReactComponent as TeamLogo } from '../public/team.svg';

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
  return (
    <ThemeProvider {...{ theme }}>
      <StyledPage>
        <div className="wrapper">
          <h1>Next JS Application</h1>
          <Welcome1></Welcome1>
        </div>
      </StyledPage>
    </ThemeProvider>
  );
}

export default Index;