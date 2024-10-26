import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import { red, grey } from '@mui/material/colors';

let theme = createTheme({
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

theme = responsiveFontSizes(theme);

export default theme;
