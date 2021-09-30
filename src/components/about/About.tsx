import { useEffect } from "react";
import { makeStyles } from "@material-ui/styles";
import { Typography } from "@mui/material";

import SectionHeader from "../sectionHeader/SectionHeader";
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

  const title = 'Por que uma Carteira Digital?';
  const content = 'Seus registros de vacinas sempre seguros e certificados.';

  return (
    <Typography component="section" className={classes.container}>
      <SectionHeader title={title} content={content} />
      <Typography component="div" className={classes.aboutDetailsContainer}>
        <AboutDetails />
        <Typography component="div" className={classes.imgContainer}>
          <img style={{ maxWidth: 679, height: 561 }} src="./images/immunie-mobile.png" alt="Cateira Digital de Vacinação no celular" />
        </Typography>
      </Typography>
    </Typography>
  )
}