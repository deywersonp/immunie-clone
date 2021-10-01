import { useEffect } from 'react';

import { makeStyles } from "@material-ui/styles";
import { Button, Typography } from "@mui/material";

import Aos from 'aos';
import 'aos/dist/aos.css';

const useStyles = makeStyles({
  card: {
    backgroundColor: 'rgb(17, 82, 147)',
    width: '348px',
    height: '276.5px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    padding: '20px 30px',
    marginTop: '40px',
    borderRadius: '5px'
  },

  header6: {
    fontSize: '1.25rem',
    fontWeight: 'bold'
  },

  btn: {
    color: 'rgba(0, 0, 0, 0.87)',
    backgroundColor: '#e0e0e0;',
    width: '130px',
    fontWeight: 'normal',
    '&:hover': {
      boxShadow: '0px 2px 4px - 1px rgb(0 0 0 / 20 %), 0px 4px 5px 0px rgb(0 0 0 / 14 %), 0px 1px 10px 0px rgb(0 0 0 / 12 %)',
      backgroundColor: '#d5d5d5'
    }
  }
});


export default function SideInfoCardTop() {

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, [])

  const classes = useStyles();


  return (
    <Typography component="div" className={classes.card} data-aos="fade-up">
      <Typography component="h6" color="white" className={classes.header6}>O que diz a Legislação?</Typography>
      <Typography component="p" color="white">
        Confira aqui a lista de Estados e Municípios com leis sobre carteira digital de vacinação e apresentação na matrícula.
      </Typography>
      <Button href="https://immunie.net/company/media-assets" variant="contained" size="large" className={classes.btn}>Saber Mais</Button>
    </Typography>
  )
}