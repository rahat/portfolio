import React from 'react';
import GithubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import { Button, Container, Divider, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles((theme) => ({
    contact: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '70vh'
    },
    button: {
        margin: theme.spacing(1)
    },
}));

function Contact() {
    const classes = styles();

    return (
        <div className={classes.contact}>
            <Container maxWidth='xs'>
                <Typography variant="h2" align="center">Contact Me</Typography>
                <Divider />
                <Button variant="contained" color="primary" className={classes.button} startIcon={<MailOutlineIcon />} href="mailto:rahatmahmud@gmail.com" target="_blank">Email</Button>
                <Button variant="contained" color="primary" className={classes.button} startIcon={<GithubIcon />} href="http://github.com/rahat" target="_blank">GitHub</Button>
                <Button variant="contained" color="primary" className={classes.button} startIcon={<LinkedInIcon />} href="http://www.linkedin.com/in/rahatmahmud" target="_blank">LinkedIn</Button>
            </Container>
        </div>
    )
}

export default Contact;
