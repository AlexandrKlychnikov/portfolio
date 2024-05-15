import React from 'react'
import { Grid, Typography, Button, Box, Link } from '@mui/material'
import myphoto from '../assets/images/myphoto.jpg'
import useStyles from '../styles/styles'

const Hero = () => {
  const classes = useStyles()

  return (
    <Box id="hero" className={classes.heroBox}>
      <Grid container spacing={6} className={classes.gridContainer}>
        <Grid item xs={12} md={7}>
          <Typography variant="h6" className={classes.subtitle}>
            Hi, my name is Alexandr
          </Typography>
          <Typography variant="h3" fontWeight={700} className={classes.title}>
            Frontend Developer
          </Typography>
          <Typography variant="h6" className={classes.subtitle}>
            I am passionate about creating great software that improves
            people&apos;s lives. I like to code things from scratch, and enjoy
            bringing ideas to life in the browser. Let&apos;s make something
            special.
          </Typography>
          <Link href="#contacts" target= "_parent" underline="none">
            <Button
              variant="contained"
              color="primary"
              sx={{ width: '200px', fontSize: '16px' }}
            >
              HIRE ME
            </Button>
          </Link>
        </Grid>
        <Grid item xs={12} md={5}>
          <img src={myphoto} alt="My photo" className={classes.largeImage} />
        </Grid>
      </Grid>
    </Box>
  )
}

export default Hero
