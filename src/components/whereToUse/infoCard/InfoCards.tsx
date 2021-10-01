import { useEffect } from 'react';

import { makeStyles } from "@material-ui/styles";
import { Paper, Typography } from "@mui/material";

import Aos from 'aos';
import 'aos/dist/aos.css'

const useStyles = makeStyles({
  paperContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '728px',
    height: '180px',
    padding: '16px',
    marginTop: '40px',
    border: 'none',
    boxShadow: 'none'
  }
});

export default function InfoCards() {

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, [])

  const classes = useStyles();

  return (
    <Paper component="div" className={classes.paperContainer} data-aos="fade-up">
      <img style={{
        width: '200px',
        height: '180px'
      }} src="./images/clinic.png" alt="Clínicas" />
      <Typography component="div">
        <Typography component="h6">CLÍNICAS</Typography>
        <Typography component="h6">Basta conectar sua carteira digital à sua clínica para que seu médico possa fazer o registro de novas vacinas.</Typography>
      </Typography>
    </Paper>
  )
}