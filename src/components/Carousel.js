import React, { useState } from 'react';
import Carousel from 'react-material-ui-carousel';
import {
    Paper,
    Button,
    Typography,
    Box,
} from '@mui/material'
import coffeeHouse from '../assets/images/coffee-house.png'
import wildlife from '../assets/images/wildlife.png'
import shelter from '../assets/images/shelter.png'
import helloPizza from '../assets/images/hello-pizza.png'
import onlineStore from '../assets/images/online-store.png'
import virtualKeyboard from '../assets/images/virtual-keyboard.png'
import portfolio from '../assets/images/portfolio.png'

import "../styles/carousel.css"

const DefaultSettings = {
  autoPlay: true,
  animation: "slide",
  indicators: true,
  duration: 500,
  navButtonsAlwaysVisible: true,
  navButtonsAlwaysInvisible: false,
  cycleNavigation: true,
  fullHeightHover: true,
  swipe: true
}

const ProjectsCarousel = () => {
    const [settings, setSettings] = useState(DefaultSettings);

    return (
        <Box sx={{ marginTop: "50px", width: { xs: '90%', md: '70%' } }}>
            <Carousel
                className="SecondExample"
                {...settings}
            >
                {
                    items.map((item, index) => {
                        return <Project item={item} key={index} />
                    })
                }
            </Carousel>
        </Box>
    )
}


function Project({item}) {
    return (
        <Paper
            className="Project"
            sx={{ background: `top / cover no-repeat url(${item.image}), #115293` }}
            elevation={10}
        >
            <Box>
              <Box sx={{ display: 'none'}}>
                <Typography variant='h5'>{item.name}</Typography>
                <Typography>{item.description}</Typography>
              </Box>
              <Button className="CheckButton" component='a' href={item.href} target='_blank' rel='noreferrer'>
                  Check it out!
              </Button>

            </Box>
        </Paper>
    )
}

const items = [
    {
        name: "coffee-house",
        image: coffeeHouse,
        description: "",
        href: 'https://coffe-house-project.netlify.app'
    },
    {
        name: "hello-pizza",
        image: helloPizza,
        description: "",
        href: 'https://hello-pizza-project.netlify.app'
    },
    {
        name: "Wildlife",
        image: wildlife,
        description: "",
        href: 'https://rolling-scopes-school.github.io/alexandrklychnikov-JSFE2021Q1/wildlife/'
    },
    {
        name: "Shelter",
        image: shelter,
        description: "My Solution on the 2019 Hash Code by Google Slideshow problem.",
        href: 'https://rolling-scopes-school.github.io/alexandrklychnikov-JSFE2023Q1/shelter/'
    },
    {
        name: "Online-store",
        image: onlineStore,
        description: "A exciting mobile game game made in the Unity Engine.",
        href: 'https://rolling-scopes-school.github.io/alexandrklychnikov-JSFE2022Q1/online-store/'
    },
    {
        name: "Virtual keyboard",
        image: virtualKeyboard,
        description: "A Generic carousel UI component for React using material ui.",
        href: 'https://alexandrklychnikov.github.io/virtual-keyboard/'
    },
    {
        name: "Portfolio",
        image: portfolio,
        description: "A Generic carousel UI component for React using material ui.",
        href: 'https://rolling-scopes-school.github.io/alexandrklychnikov-JSFEPRESCHOOL/portfolio/'
    }
]

export default ProjectsCarousel;