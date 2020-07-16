import React from 'react';
import { Container, Divider, Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles((theme) => ({
    about: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '70vh',
    },
    skills: {
        paddingTop: theme.spacing(8),
    },
    list: {
        paddingLeft: 15,
        marginTop: 0,
    },
}));
function About() {
    const classes = styles();

    return (
        <div className={classes.about}>
            <Container maxWidth='md'>
                <Typography variant='h2'>About</Typography>
                <Divider />
                <Typography variant='body1'>
                    Hello there, I'm Rahat. I was born and raised in Brooklyn, New York
                    where I also attended high school at Pathways in Technology Early
                    College High School (P-TECH). During my time there, I managed to work
                    towards and achieve an Associate of Applied Science degree in Computer
                    Information Systems from the New York City College of Technology. Just
                    recently, I graduated with a Bachelor's degree in Computer Science
                    from Macaulay Honors College at Queens College. I enjoy building
                    desktop, mobile, and web applications as well as learning about new
                    technologies in my spare time.
        </Typography>
                <div className={classes.skills}>
                    <Typography variant='h2'>Skills</Typography>
                    <Divider />

                    <Grid container spacing={2}>
                        <Grid item xs={4}>
                            <Typography variant='h6'>Back-End Development</Typography>
                            <Typography variant='subtitle1'>
                                <ul className={classes.list}>
                                    <li>Java</li>
                                    <li>C++</li>
                                    <li>C#</li>
                                    <li>Python</li>
                                    <li>SQL</li>
                                </ul>
                            </Typography>
                        </Grid>

                        <Grid item xs={4}>
                            <Typography variant='h6'>Front-End Development</Typography>
                            <Typography variant='subtitle1'>
                                <ul className={classes.list}>
                                    <li>HTML</li>
                                    <li>CSS</li>
                                    <li>JavaScript</li>
                                </ul>
                            </Typography>
                        </Grid>

                        <Grid item xs={4}>
                            <Typography variant='h6'>Frameworks & Libraries</Typography>
                            <Typography variant='subtitle1'>
                                <ul className={classes.list}>
                                    <li>React</li>
                                    <li>Angular</li>
                                    <li>jQuery</li>
                                    <li>Bootstrap</li>
                                    <li>Spring Boot</li>
                                    <li>JavaFX</li>
                                </ul>
                            </Typography>
                        </Grid>
                    </Grid>
                </div>
            </Container>
        </div>
    );
}

export default About;
