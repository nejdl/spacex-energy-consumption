import theme from './theme';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Container } from '@mui/material';

import Chart from './components/Chart/Chart';
import Header from './components/Header/Header';
import LaunchList from './components/LaunchList/LaunchList';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <Container component="main" maxWidth={false}>
        <LaunchList />
        <Chart />
      </Container>
    </ThemeProvider>
  );
}

export default App;
