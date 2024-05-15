import {
  AppBar,
  Typography,
  Link,
  Box,
  Toolbar,
  List,
  IconButton,
  Drawer,
} from '@mui/material'
import React from 'react'
import useScrollTrigger from '@mui/material/useScrollTrigger'
import PropTypes from 'prop-types'
import MenuIcon from '@mui/icons-material/Menu'
import useStyles from '../styles/styles'
import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'
import github_logo from '../assets/svg/github-logo.svg'

function ElevationScroll(props) {
  const { children, window } = props
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  })

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  })
}

ElevationScroll.propTypes = {
  children: PropTypes.element.isRequired,
  window: PropTypes.func,
}

const Header = (props) => {
  const classes = useStyles()
  const links = [
    {
      id: 1,
      route: 'About',
      url: '#hero',
    },
    { id: 2, route: 'Skills', url: '#skills' },
    { id: 3, route: 'Projects', url: '#projects' },
    { id: 4, route: 'Education', url: '#education' },
    { id: 5, route: 'Contacts', url: '#contacts' },
  ]

  const [state, setState] = React.useState({
    right: false,
  })

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return
    }

    setState({ ...state, [anchor]: open })
  }

  const list = (anchor) => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {links.map((link) => (
          <Link href={link.url} target="_blank" underline="none" key={link.id}>
            <Typography
              className={[classes.link, classes.burgerLink].join(' ')}
            >
              {link.route}
            </Typography>
          </Link>
        ))}
      </List>
    </Box>
  )

  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.down('md'))

  return (
    <Box sx={{ marginBottom: '70px' }}>
      <ElevationScroll {...props}>
        <AppBar>
          <Toolbar className={classes.toolBar}>
            <Link href="https://github.com/AlexandrKlychnikov" target="_blank" underline="none" sx={{ display: 'flex', placeItems: 'center', color: 'black' }}>
             {<img src={github_logo} alt="github icon" className={classes.githubLogo} />}
             <Typography variant="h6" className={classes.logo}>
                AlexandrKlychnikov
              </Typography>
            </Link>
            {matches ? (
              <Box>
                <IconButton
                  size="large"
                  edge="end"
                  color="inherit"
                  aria-label="menu"
                  onClick={toggleDrawer('right', true)}
                >
                  <MenuIcon className={classes.menuIcon} fontSize="" />
                </IconButton>

                <Drawer
                  sx={{
                    '& .css-1160xiw-MuiPaper-root-MuiDrawer-paper': {
                      backgroundColor: 'LightSteelBlue',
                    },
                  }}
                  anchor="right"
                  open={state['right']}
                  onClose={toggleDrawer('right', false)}
                >
                  {list('right')}
                </Drawer>
              </Box>
            ) : (
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  flexGrow: '0.1',
                }}
              >
                {links.map((link) => (
                  <Link
                    href={link.url}
                    target= "_parent"
                    underline="none"
                    key={link.id}
                  >
                    <Typography className={classes.link}>
                      {link.route}
                    </Typography>
                  </Link>
                ))}
              </Box>
            )}
          </Toolbar>
        </AppBar>
      </ElevationScroll>
    </Box>
  )
}

export default Header
