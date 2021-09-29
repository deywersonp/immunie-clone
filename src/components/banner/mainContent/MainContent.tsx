import { Button, Grid, Typography } from "@mui/material";
import { makeStyles } from '@material-ui/styles';
import { useEffect } from "react";
import Aos from 'aos';
import 'aos/dist/aos.css'

const useStyles = makeStyles({
  section: {
    width: '586px',
    height: '322px',
    paddingLeft: '102px',
    paddingTop: '82px',
    textDecoration: 'none'
  },

  header3: {
    color: '#2d3748',
    fontFamily: 'Lato',
    fontWeight: 700,
    padding: '8px'
  },

  header6: {
    color: '#2d3748',
    fontFamily: 'Lato',
    fontSize: '1.2rem',
    padding: '8px'
  }
});

export default function MainContent() {
  const classes = useStyles();

  useEffect(() => {
    Aos.init({ duration: 1000 })
  }, []);

  return (
    <Typography component="section" className={classes.section} data-aos="fade-up">
      <Grid container>
        <Typography component="h3" variant="h3" className={classes.header3}>
          Carteira digital de vacinação e saúde
        </Typography>
        <Typography component="h6" className={classes.header6}>
          Mantenha seus registros atualizados online. Controle o acesso a suas informações de forma segura no seu médico, escolas ou quando for viajar.
        </Typography>
        <Typography component="div" sx={{ padding: '6px' }}>
          <Button href="https://www.app.immunie.net/" color="primary" variant="contained" size="large">
            Começar Agora
          </Button>
        </Typography>
      </Grid>
    </Typography >
  )
}