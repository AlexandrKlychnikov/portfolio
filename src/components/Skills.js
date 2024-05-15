import React from 'react'
import { Grid, Typography, Stack, Rating } from '@mui/material'
import useStyles from '../styles/styles'
import javascript_logo from '../assets/svg/javascript-logo.svg'
import typescript_logo from '../assets/svg/typescript-logo.svg'
import react_logo from '../assets/svg/react-logo.svg'
import redux_logo from '../assets/svg/redux-logo.svg'
import sass_logo from '../assets/svg/sass-logo.svg'
import mui_logo from '../assets/svg/mui-logo.svg'
import webpack_logo from '../assets/svg/webpack-logo.svg'
import figma_logo from '../assets/svg/figma-logo.svg'
import testing_library_logo from '../assets/svg/testing-library-logo.svg'
import jest_logo from '../assets/svg/jest-logo.svg'

const Skills = () => {
  const classes = useStyles()

  const sectionItems = [
    {
      id: 1,
      icon: javascript_logo,
      skill: 'Javascript',
      rating: 4.5
    },
    {
      id: 2,
      icon: typescript_logo,
      skill: 'Typescript',
      rating: 2.5
    },
    {
      id: 3,
      icon: react_logo,
      skill: 'React',
      rating: 4
    },
    {
      id: 4,
      icon: redux_logo,
      skill: 'Redux',
      rating: 4
    },
    {
      id: 5,
      icon: sass_logo,
      skill: 'Sass',
      rating: 4
    },
    {
      id: 6,
      icon: mui_logo,
      skill: 'MUI',
      rating: 4
    },
    {
      id: 7,
      icon: webpack_logo,
      skill: 'Webpack',
      rating: 3
    },
    {
      id: 8,
      icon: figma_logo,
      skill: 'Figma',
      rating: 3
    },
    {
      id: 9,
      icon: testing_library_logo,
      skill: 'react-testing-library',
      rating: 3
    },
    {
      id: 10,
      icon: jest_logo,
      skill: 'Jest',
      rating: 3
    },
  ]
  return (
    <Stack
      id="skills"
      spacing={8}
      sx={{
        paddingTop: '75px',
        flexGrow: 1,
        minHeight: '400px',
        background: 'linear-gradient(Dimgray, LightSlateGray)',
      }}
    >
      <Typography variant="h4" sx={{ textAlign: 'center' }}>
        Skills
      </Typography>

      <Grid container className={classes.sectionGridContainer} >
        {sectionItems.map((item) => (
          <Grid
            item
            xs={6}
            sm={4}
            md={3}
            lg={2}
            minHeight={100}
            key={item.id}
            className={classes.sectionGridItem}
          >
            {<img src={item.icon} alt={`${item.skill} icon`} className={classes.skillLogo} />}
            <Typography sx= {{ color: '#06448c'}}>{item.skill}</Typography>
            <Rating name="read-only" value={item.rating} readOnly precision={0.5} />
          </Grid>
        ))}
      </Grid>
    </Stack>
  )
}

export default Skills
