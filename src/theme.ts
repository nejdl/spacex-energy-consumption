import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

const theme = createTheme({
  cssVariables: true,
  palette: {
    primary: {
      main: '#005288',
    },
    secondary: {
      main: '#A7A9AC',
    },
    error: {
      main: red.A400,
    },
  },
});

export default theme;
