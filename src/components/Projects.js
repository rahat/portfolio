import React from 'react';
import { Grid, Button, Card, CardActions, CardContent, Chip, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import projects from '../projects.json'

const styles = makeStyles((theme) => ({
  root: {
    padding: 20
  },
  card: {
    minWidth: 300,
    maxWidth: 600,
  },
  chip: {
    margin: theme.spacing(0.5)
  }
}));

function Projects() {
  const classes = styles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        {
          projects.map && projects.map((project) => {
            return (
              <Grid item xs={4}>
                <Card className={classes.card}>
                  <CardContent>
                    <Typography variant='h4' gutterBottom>{project.name}</Typography>
                    <Typography variant='body2' gutterBottom>{project.description}</Typography>
                    {
                      project.skills.map && project.skills.map((skill) => {
                        return (
                          <Chip label={skill} variant="outlined" className={classes.chip}></Chip>
                        )
                      })
                    }
                  </CardContent>
                  <CardActions>
                    <Button size='small' href={project.link}>Github</Button>
                  </CardActions>
                </Card>
              </Grid>
            )
          })
        }
      </Grid>
    </div>
  );
}

export default Projects;
