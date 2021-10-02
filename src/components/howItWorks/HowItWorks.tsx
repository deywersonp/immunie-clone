import { makeStyles } from "@material-ui/styles";
import { Typography } from "@mui/material";
import SectionHeader from "../sectionHeader/SectionHeader";
import HowItWorksDetails from "./howItWorksDetails/HowItWorksDetails";

const useStyles = makeStyles({
  section: {
    backgroundColor: 'rgb(247, 249, 250)',
    display: 'flex',
    flexDirection: 'column',
    padding: '96px 64px',
  },

  container: {
    marginTop: '30px'
  }
});

export default function HowItWorks() {
  const classes = useStyles();

  const title = "COMO FUNCIONA";
  const content = "Fácil, simples e sem a necessidade de mais um aplicativo ocupando memória em seu telefone.";

  return (
    <Typography component="section" className={classes.section}>
      <SectionHeader title={title} content={content} />
      <Typography component="div" className={classes.container}>
        <HowItWorksDetails />
      </Typography>
    </Typography>
  )
}