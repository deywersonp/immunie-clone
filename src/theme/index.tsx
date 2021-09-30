import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors/';

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: '#3f51b5',
    },
    secondary: {
      main: 'rgb(241, 85, 85)',
    },
    error: {
      main: red.A400,
    },
    text: {
      primary: '#2d3748',
      secondary: '#718096'
    }
  },
});

export default theme;