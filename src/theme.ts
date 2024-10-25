import { createTheme } from '@mui/material/styles';
import { red, grey } from '@mui/material/colors';

const theme = createTheme({
  cssVariables: true,
  palette: {
    primary: {
      main: '#005288',
    },
    secondary: {
      main: grey[300],
    },
    error: {
      main: red.A400,
    },
  },
});

export default theme;
