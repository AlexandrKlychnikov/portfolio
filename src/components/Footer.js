import React from 'react';
import { Box, Typography, Link } from '@mui/material';
import useStyles from '../styles/styles';
import github_logo from '../assets/svg/github-logo.svg'
import { LineWeight, VerticalAlignBottom } from '@mui/icons-material';

const Footer = () => {
  const date = new Date().getFullYear();
  const classes = useStyles();

  return (
    <Box sx={{ flexGrow: 1 }} className={classes.footerContainer}>
      <Box className={classes.footerText}>
        <Link href="https://github.com/AlexandrKlychnikov" target="_blank" underline="none" sx={{ display: 'flex', placeItems: 'center', color: 'black' }}>
          {<img src={github_logo} alt="github icon" className={classes.githubLogo} />}
          <Typography variant='span'>
            Alexandrklychnikov
          </Typography>
        </Link>
      </Box>
      <Typography className={classes.footerDate}>&#169; {date}</Typography>
    </Box>
  );
};

export default Footer;