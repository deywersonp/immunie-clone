import SectionHeader from "../sectionHeader/SectionHeader";

import { Button, Paper, Typography } from "@mui/material";
import { makeStyles } from "@material-ui/styles";
import InfoCards from "./inforCards/InfoCards";

const useStyles = makeStyles({
  container: {
    backgroundColor: '#f7f9fa',
    paddingTop: '80px'
  },

  section: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },

  card: {
    width: '348px',
    height: '276.5px'
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

export default function WhereToUse() {
  const classes = useStyles();

  const title = 'Aonde usar';
  const content = 'Torne sua vida mais fácil com Immunie. Sem papel, sem preocupações.';

  return (
    <Typography component="div" className={classes.container}>
      <SectionHeader title={title} content={content} />
      <Typography component="section" className={classes.section}>

        <Typography component="div">
          <InfoCards />
          <InfoCards />
          <InfoCards />
          <InfoCards />
        </Typography>

        {/* <Typography component="div">
          <Typography component="div">
            <Typography component="h6" className={classes.card}>O que diz a Legislação?
            </Typography>
            <Typography component="p">Confira aqui a lista de Estados e Municípios com leis sobre carteira digital de vacinação e apresentação na matrícula.

            </Typography>
            <Button href="https://immunie.net/company/media-assets" variant="contained" size="large" className={classes.btn}>Saber Mais</Button>
          </Typography>
        </Typography> */}

      </Typography>
    </Typography>
  )
}