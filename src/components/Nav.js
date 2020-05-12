import React from 'react';
import { AppBar, Button, Toolbar, Typography } from '@material-ui/core';
import { HashRouter, Route, Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import Home from './Home';
import Projects from './Projects';
import About from './About';
import Contact from './Contact';

const styles = makeStyles((theme) => ({
    root: {
        flexGrow: 1
    },
    title: {
        flexGrow: 1
    }
}));

function Nav() {
    const classes = styles();
    return (
        <HashRouter basename="/">
            <div className={classes.root}>
                <AppBar position="static">
                    <Toolbar>
                        <Typography variant="h6" color="inherit" className={classes.title}>Rahat's Portfolio</Typography>
                        <Button color="inherit" to="/" component={Link}>Home</Button>
                        <Button color="inherit" to="/about" component={Link}>About</Button>
                        <Button color="inherit" to="/projects" component={Link}>Projects</Button>
                        <Button color="inherit" to="/contact" component={Link}>Contact</Button>
                    </Toolbar>
                </AppBar>
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/projects" component={Projects} />
                <Route path="/contact" component={Contact} />
            </div>
        </HashRouter>
    )
}

export default Nav;
