import { useEffect } from "react";
import { makeStyles } from "@material-ui/styles";
import { Typography } from "@mui/material";
import AboutDetails from "./aboutDetails/AboutDetails"
import Aos from 'aos';
import 'aos/dist/aos.css'

const useStyles = makeStyles({
  container: {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    flexDirection: 'column',
    paddingTop: '96px',
    paddingBottom: '96px'
  },

  headersContainer: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    width: '100%',
    alignText: 'center'
  },

  header4: {
    fontFamily: 'Lato',
    fontWeight: 'bold',
    fontSize: '2.0243rem',
    padding: '8px'
  },

  header6: {
    fontSize: '1.25rem',
    padding: '8px'
  },

  aboutDetailsContainer: {
    width: '100%',
    display: 'grid',
    gridTemplateColumns: '50% 50%',
    alignItems: 'center',
    justifyContent: 'flex-end'
  },

  imgContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end'
  }
});

export default function About() {

  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, []);


  const classes = useStyles();

  return (
    <Typography component="section" className={classes.container}>
      <Typography component="div" className={classes.headersContainer} data-aos="fade-up">
        <Typography component="h4" color="textPrimary" className={classes.header4}>Por que uma Carteira Digital?</Typography>
        <Typography component="h6" color="textSecondary" className={classes.header6}>Seus registros de vacinas sempre seguros e certificados.
        </Typography>
      </Typography>
      <Typography component="div" className={classes.aboutDetailsContainer}>
        <AboutDetails />
        <Typography component="div" className={classes.imgContainer}>
          <img style={{ maxWidth: 679, height: 561 }} src="./images/immunie-mobile.png" alt="Cateira Digital de Vacinação no celular" />
        </Typography>
      </Typography>
    </Typography>
  )
}