import React from 'react'
import { Grid, Typography, Button, Stack } from '@mui/material'
import ProjectsCarousel from './Carousel'
import useStyles from '../styles/styles'

const Projects = () => {
  const classes = useStyles()

  return (
    <Stack
      id="projects"
      sx={{
        paddingTop: '75px',
        flexGrow: 1,
      }}
      className={classes.aboutUsContainer}
    >
      <Grid>
        <Typography variant="h4" sx={{ textAlign: 'center' }}>
          Projects
        </Typography>
      </Grid>
      <ProjectsCarousel />
    </Stack>
  )
}

export default Projects
