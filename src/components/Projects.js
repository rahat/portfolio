import React, { useState } from 'react';
import { Grid, Button, Card, CardActions, CardContent, Collapse, Chip, Typography } from '@material-ui/core';
import GithubIcon from '@material-ui/icons/GitHub';
import PhotoOutlinedIcon from '@material-ui/icons/PhotoOutlined';
import { makeStyles } from '@material-ui/core/styles';
import Image from "react-image-enlarger";
import projects from '../projects.json';

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

function Thumbnail({ src }) {
  const [zoom, setZoom] = React.useState(false);

  return (
    <div>
      <Image
        zoomed={zoom}
        src={src}
        onClick={() => setZoom(true)}
        onRequestClose={() => setZoom(false)}
        overlayColor="#0a0a0a"
      />
    </div>
  );
}

function Projects() {
  const classes = styles();
  const [expanded, setExpanded] = useState({});

  const handleExpandClick = (id) => {
    setExpanded({
      ...expanded,
      [id]: !expanded[id]
    });
  }

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        {
          projects && projects.map((project, index) => {
            return (
              <Grid item xs={4}>
                <Card className={classes.card}>
                  <CardContent>
                    <Typography variant='h4' gutterBottom>{project.name}</Typography>
                    <Typography variant='body2' gutterBottom>{project.description}</Typography>
                    {
                      project.skills && project.skills.map((skill) => {
                        return (
                          <Chip label={skill} variant="outlined" className={classes.chip}></Chip>
                        )
                      })
                    }
                  </CardContent>
                  <CardActions>
                    <Button size='small' variant="outlined" startIcon={<GithubIcon />} href={project.link}>Github</Button>
                    {project.images ? <Button size='small' variant="outlined" startIcon={<PhotoOutlinedIcon />} onClick={() => handleExpandClick(index)}>Screenshots</Button> : null}
                  </CardActions>
                  <Collapse in={expanded[index]} timeout="auto" unmountOnExit>
                    <Grid
                      container
                      direction="row"
                      justify="space-evenly"
                      alignItems="center"
                    >
                      {
                        project.images && project.images.map((image, id) => {
                          return (
                            <Thumbnail key={id} src={image} />
                          )
                        })
                      }
                    </Grid>
                  </Collapse>
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
