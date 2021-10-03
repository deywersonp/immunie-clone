import { makeStyles } from "@material-ui/styles";
import { Typography } from "@mui/material";
import SectionHeader from "../sectionHeader/SectionHeader";
import OurPlansDetails from "./ourPlansDetails/OurPlansDetails";

const useStyles = makeStyles({
  section: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '96px 64px',
  },

  container: {
    marginTop: '30px'
  }
});

export default function OurPlans() {
  const classes = useStyles();

  const title = "Nossos Planos";
  const content = "Fique sempre em dia, guarde seus registros com segurança, controle suas permissões, e utilize seu cartão digital de vacinação em qualquer lugar do mundo.";

  return (
    <Typography component="section" className={classes.section}>
      <SectionHeader title={title} content={content} />
      <Typography component="div" className={classes.container}>
        <OurPlansDetails />
      </Typography>
    </Typography>
  )
}