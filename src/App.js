import React from 'react';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';
import Home from './Home';

const useStyles = makeStyles ({
  root: {
  },
});


function App() {
  const theme = createTheme({
    spacing: 4,
    palette: {
      primary: {
        main: '#f44336',
      },
      secondary: {
        main: '#1976d2',
      },
      terciary: {
        main: '#181818',
      },
    }
  });

const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
     <Home />
    </ThemeProvider> 
  );
}

export default App;
