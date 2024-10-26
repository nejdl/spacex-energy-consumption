import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import theme from './components/theme/theme';
import { Box } from '@mui/material';
import Header from './components/Layout/Header/Header';
import Dashboard from './components/Layout/Dashboard/Dashboard';

const App = () => {
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
        <Dashboard />
      </Box>
    </ThemeProvider>
  );
};

export default App;
