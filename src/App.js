import React from 'react';
import Nav from './components/Nav';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from './theme';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <Nav />
    </MuiThemeProvider>
  );
}

export default App;
