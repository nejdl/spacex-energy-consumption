import theme from './theme';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Box, Container } from '@mui/material';

import Chart from './components/Chart/Chart';
import Header from './components/Layout/Header/Header';
import Launches from './components/Launches/Launches';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          height: '100dvh',
        }}
      >
        <Header />
        <Container
          component="main"
          maxWidth={false}
          disableGutters
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            overflow: 'hidden',
            height: '100%',
          }}
        >
          <Launches />
          <Chart />
        </Container>
      </Box>
    </ThemeProvider>
  );
};

export default App;
