import { useEffect } from "react";

import { makeStyles } from "@material-ui/styles";
import { Typography } from "@mui/material";
import AboutBlockchain from "./aboutBlockchain/AboutBlockchain";

import Aos from 'aos';
import 'aos/dist/aos.css';

const useStyles = makeStyles({
  section: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '96px 64px'
  },

  container: {
    width: '538px',
    display: 'flex',
    flexDirection: 'column',
    marginRight: '120px'
  },

  header4: {
    fontSize: '2.0243rem',
    fontWeight: 'bold'
  },

  header6: {
    fontSize: '1.25rem',
    fontWeight: 'normal',
    padding: '10px 0'
  }
});

export default function BlockchainTechnology() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  const classes = useStyles();

  return (
    <Typography component="section" className={classes.section}>
      <Typography component="div" className={classes.container} data-aos="fade-up">
        <Typography component="h4" className={classes.header4}>Tecnologia Blockchain</Typography>
        <Typography component="h6" className={classes.header6}>
          A autenticação dos registros de vacinação inseridos na sua Carteira Digital de Vacinação e Saúde Immunie utiliza dois níveis de encriptação para garantir a autenticidade dos dados, preservando sua privacidade.
        </Typography>
        <AboutBlockchain />
      </Typography>

      <Typography component="div" data-aos="fade-up">
        <img style={{
          width: '450px',
          height: '360px'
        }} src="./images/blockchain-technology.png" alt="Tecnologia Blockchain" />
      </Typography>
    </Typography>
  )
}