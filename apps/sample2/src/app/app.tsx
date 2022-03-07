import { Theme, ThemeProvider } from '@emotion/react';
import { Welcome1 } from '@nx-sample-react/lib1';

import {ReactComponent as TeamLogo} from '../assets/team.svg';
const theme: Theme = {
  color: {
    primary: 'Green'
  },
  icons: {
    team: TeamLogo
  }
}

export function App() {
  return (
    <ThemeProvider theme={theme}>
      <h1>React Application</h1>
      <Welcome1></Welcome1>
    </ThemeProvider>
  );
}

export default App;
