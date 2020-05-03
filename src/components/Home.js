import React from 'react';
import Particles from 'react-particles-js';
import { Button, Container, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles((theme) => ({
    main: {
        position: 'absolute',
        left: '50%',
        top: '50%',
        transform: 'translate(-50%, -50%)'
    },
    title: {
        marginTop: theme.spacing(8),
        marginBottom: theme.spacing(2),
    },
    button: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    }
}));

function Home() {
    const classes = styles();

    return (
        <div>
            <Container maxWidth='lg' className={classes.main}>
                <Typography variant='h1' color="textPrimary" align="center" className={classes.title} gutterBottom>
                    Rahat Mahmud
                </Typography>
                <Typography variant='h5' color="textSecondary" align="center" gutterBottom>
                    Developer based in NYC
                </Typography>
                <Typography variant='h6' color="textSecondary" align="center" gutterBottom>
                    Java / C++ / C# / Python / HTML / CSS / JS
                </Typography>
                <div className={classes.button}>
                    <Button variant="outlined" color="textPrimary">See my work</Button>
                </div>
            </Container>
            <Particles
                params={{
                    particles: {
                        number: {
                            value: 50,
                            density: {
                                enable: true,
                                value_area: 1500,
                            },
                        },
                    },
                    interactivity: {
                        events: {
                            onhover: {
                                enable: true,
                                mode: 'grab'
                            }
                        }
                    }
                }}
            />
        </div>
    )
}

export default Home;
