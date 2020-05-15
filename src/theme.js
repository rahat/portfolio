import { createMuiTheme } from '@material-ui/core/styles';

export default createMuiTheme({
  shape: {
    borderRadius: 0,
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        body: {
          backgroundColor: '#242424',
        },
      },
    },
  },
  palette: {
    type: 'dark',
    primary: { light: '#484848', main: '#0a0a0a', dark: '#000000' },
    secondary: { light: '#454545', main: '#1e1e1e', dark: '#000000' },
  },
});
