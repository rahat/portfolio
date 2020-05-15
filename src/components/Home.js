import React from 'react';
import Particles from 'react-particles-js';
import { Button, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

const styles = makeStyles((theme) => ({
    root: {
        backgroundColor: '#1a1a1a'
    },
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
        <div className={classes.root}>
            <div className={classes.main}>
                <Typography variant='h1' color="textPrimary" className={classes.title} gutterBottom>
                    Rahat Mahmud
                </Typography>
                <Typography variant='h5' color="textSecondary" gutterBottom>
                    Developer based in NYC
                </Typography>
                <Typography variant='h6' color="textSecondary" gutterBottom>
                    Java / C++ / C# / Python / HTML / CSS / JS
                </Typography>

                <Button variant="outlined" color="inherit" to="/projects" component={Link}>See my work</Button>
                <Button variant="outlined" color="inherit" to="/contact" component={Link}>Contact me</Button>
            </div>
            <Particles style={{ position: 'fixed', zIndex: -1 }} width={'100%'} height={'100%'}
                params={{
                    particles: {
                        color: {
                            value: '#FFFFFF'
                        },
                        line_linked: {
                            color: {
                                value: '#FFFFFF'
                            },
                        },
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
