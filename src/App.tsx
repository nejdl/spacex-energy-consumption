import theme from './theme';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Container } from '@mui/material';

import Chart from './components/Chart/Chart';
import Header from './components/Layout/Header/Header';
import LaunchList from './components/LaunchList/LaunchList';

const App: React.FC = () => {
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
};

export default App;
