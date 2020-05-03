import React from 'react';
import { Container, Typography, Divider } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles((theme) => ({
  footer: {
    padding: theme.spacing(2, 0)
  },
}));

function Footer() {
  const classes = styles();

  return (
    <footer>
      <Divider variant="fullWidth"></Divider>
      <Container maxWidth='lg'>
        <Typography variant='body1' color="textSecondary" align="center" className={classes.footer}>
          Copyright © {new Date().getFullYear()} Rahat Mahmud
        </Typography>
      </Container>
    </footer>
  );
}

export default Footer;
