import { useEffect } from 'react';

import { makeStyles } from "@material-ui/styles";
import { Button, Typography } from "@mui/material";
import SectionHeader from "../sectionHeader/SectionHeader";
import VaccinationCards from "./vaccinationCards/VaccinationCards";

import Aos from 'aos';
import 'aos/dist/aos.css';


const useStyles = makeStyles({
  section: {
    backgroundColor: 'rgb(247, 249, 250)',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    padding: '96px 64px',
  },

  headerContainer: {
    maxWidth: '672px',
    marginBottom: '8px'
  },

  cardsContainer: {
    width: '640px',
  }
});

export default function Vaccination() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  const classes = useStyles();

  const title = 'Programas de Vacinação no Brasil';
  const content = 'Além do Calendário de Vacinação divulgado pelo Ministério da Saúde como diretriz para o Programa Nacional de Imunização, o Brasil também tem como referências os calendários da Sociedade Brasileira de Pediatria e da Sociedade Brasileira de Imunologia.'

  return (
    <Typography component="section" className={classes.section}>
      <Typography component="div" className={classes.headerContainer}>
        <SectionHeader title={title} content={content} secondaryColor="textPrimary" />
      </Typography>
      <Button
        href="https://immunie.net/company/media-assets"
        variant="contained"
        color="primary"
        data-aos="fade-up">
        Saber Mais
      </Button>
      <Typography component="div" className={classes.cardsContainer}>
        <VaccinationCards />
      </Typography>
    </Typography>
  )
}