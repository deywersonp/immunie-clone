import { useEffect } from 'react';

import { makeStyles } from "@material-ui/styles";
import { Grid, Button, Typography } from "@mui/material";

import Aos from 'aos';
import 'aos/dist/aos.css'

const useStyles = makeStyles({
  section: {
    backgroundColor: '#0c133e',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '492px'
  },

  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '1140px'
  },

  gridContainer: {
    width: '100%',
    display: 'flex',
  },

  textContainer: {
    width: '100%',
    height: '300px'
  },

  header4: {
    fontFamily: 'Lato',
    fontSize: '2.0243rem',
    fontWeight: 'bold'
  },

  text: {
    fontFamily: 'Lato',
    fontSize: '1rem',
    fontWeight: 400,
    marginTop: '15px',
    marginBottom: '15px'
  },

  imgContainer: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },

  btn: {
    color: 'rgba(0, 0, 0, 0.87)',
    backgroundColor: '#e0e0e0;',
    fontWeight: 'normal',
    '&:hover': {
      boxShadow: '0px 2px 4px - 1px rgb(0 0 0 / 20 %), 0px 4px 5px 0px rgb(0 0 0 / 14 %), 0px 1px 10px 0px rgb(0 0 0 / 12 %)',
      backgroundColor: '#d5d5d5'
    }
  }
});

export default function Privacy() {
  useEffect(() => {
    Aos.init({ duration: 1000 })
  }, [])

  const classes = useStyles();

  return (
    <Typography component="section" className={classes.section}>
      <Typography component="div" className={classes.container}>
        <Grid className={classes.gridContainer}>
          <Typography component="div" className={classes.textContainer} data-aos="fade-up">
            <Typography component="h4" color="white" className={classes.header4}>Privacidade em Primeiro Lugar</Typography>
            <Typography component="p" color="white" className={classes.text}>Immunie foi construído de acordo com os mais elevados padrões de privacidade global, estando 100% de acordo com a Lei Geral de Proteção de Dados Pessoais no Brasil (LGPDP – Lei 13.709/18), Regulamento Geral de Proteção de Dados Europeu (GDPR EU 2016/679) e California Data Protection Act (CDPA / 2018).</Typography>
            <Button variant="contained" size="large" className={classes.btn}>Saber Mais</Button>
          </Typography>
          <Typography component="div" className={classes.imgContainer}>
            <img style={{
              width: '300px',
              height: '300px',
              borderRadius: '25px',
            }} src="./images/privacy.png" alt="Privacidade" />
          </Typography>
        </Grid>
      </Typography >
    </Typography >
  )
}