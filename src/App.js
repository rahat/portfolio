import React from 'react';
import Nav from './components/Nav';
import Home from './components/Home';
import Projects from './components/Projects';
import Footer from './components/Footer';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from './theme';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <Nav />
      <Home />
      <Projects />
      <Footer />
    </MuiThemeProvider>
  );
}

export default App;
