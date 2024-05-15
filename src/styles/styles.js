import { makeStyles } from '@mui/styles'

const styles = (theme) => {
  return {
    toolBar: {
      height: '8vh',
      minHeight: '70px !important',
      display: 'flex',
      justifyContent: 'space-between',
      padding: '20px',
      backgroundColor: 'SlateGray',
    },
    logo: {
      color: 'MidnightBlue',
      fontWeight: '700 !important',
      cursor: 'pointer',
      textShadow: '0.5px 0.5px 0.5px silver',
    },
    link: {
      color: 'MidnightBlue',
      fontSize: '20px !important',
      paddingLeft: '10px',
      '&:hover': {
        color: 'silver',
      },
    },
    burgerLink: {
      padding: '5px 0 5px 10px',
      '&:hover': {
        color: 'MidnightBlue',
        textDecoration: 'underline',
      },
    },
    menuIcon: {
      color: 'MidnightBlue',
    },
    formContainer: {
      flexGrow: 1,
      padding: '10px',
      maxWidth: '700px',
      margin: '30px auto',
      [theme.breakpoints.between('xs', 'sm')]: {
        width: '100%',
      },
    },
    form: {
      marginTop: '30px',
    },
    formHeading: {
      textAlign: 'center',
    },
    heroBox: {
      width: '100%',
      display: 'flex',
      minHeight: '500px',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'linear-gradient(SlateGray, Dimgray)',
    },
    gridContainer: {
      display: 'flex',
      alignItems: 'center',
      maxWidth: '1300px',
      padding: '50px',
    },
    aboutUsContainer: {
      width: '100%',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '30px 0px 50px 0px',
      background: 'linear-gradient(LightSlateGray, LightSteelBlue)',
    },
    title: {
      paddingBottom: '15px',
    },
    subtitle: {
      opacity: '0.9',
      paddingBottom: '30px',
    },
    largeImage: {
      width: '100%',
    },
    sectionGridContainer: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexWrap: 'wrap',
      width: '100%',
    },
    sectionGridItem: {
      textAlign: 'center',
    },
    inputField: {
      marginBottom: '20px !important',
    },
    textArea: {
      width: '100%',
      marginBottom: '20px',
      fontSize: '16px',
      padding: '10px',
    },
    footerContainer: {
      display: 'flex',
      alignItems: 'center',
      minHeight: '10vh',
      padding: '20px',
      justifyContent: 'center',
      backgroundColor: 'LightSteelBlue',
      flexDirection: 'column',
    },
    footerText: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      paddingBottom: '10px',
    },
    footerDate: {
      opacity: '0.4',
    },
    educationCard: {
      backgroundColor: '#fff',
      padding: '10px',
      minHeight: '200px',
      display: 'flex',
      alignItems: 'center',
    },
    educationStatement: {
      paddingBottom: '25px',
      fontSize: '1.5em',
      fontWeight: 'bold',
    },
    educationPosition: {
      fontSize: '14px',
      opacity: '0.6',
    },
    skillLogo: {
      height: '68px'
    },
    githubLogo: {
      height: '32px'
    },
    project__arrow: {
      '&:hover': { cursor: 'pointer'},
      color: 'white' }
  }
}

const useStyles = makeStyles(styles)
export default useStyles
