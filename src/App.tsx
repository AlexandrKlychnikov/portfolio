import * as React from 'react'
import Hero from './components/Hero'
import Header from './components/Header'
import Skills from './components/Skills'
import Education from './components/Education'
import ContactMe from './components/ContactMe'
import Footer from './components/Footer'
import Projects from './components/Projects'
import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import CssBaseline from '@mui/material/CssBaseline'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import './styles/App.css'

const theme = createTheme({
  typography: {
    fontFamily: ['Poppins', 'sans-serif'].join(','),
  },
})

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header />
        <Hero />
        <Skills />
        <Projects />
        <Education />
        <ContactMe />
        <Footer />
      </ThemeProvider>
    </>
  )
}

export default App
