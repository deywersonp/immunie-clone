import { makeStyles } from "@material-ui/styles";
import { Typography } from "@mui/material";
import SectionHeader from "../sectionHeader/SectionHeader";
import OurTechnologyDetails from "./ourTechnologyDetails/OurTechnologyDetails";

const useStyles = makeStyles({
  section: {
    backgroundColor: '#3d93d0',
    padding: '96px 64px'
  }
});


export default function OurTechnology() {
  const classes = useStyles();

  const title = 'Padrão global de gestão e serviços';
  const content = 'Trabalhamos com a melhor tecnologia e os melhores provedores de serviço no mercado global.';

  return (
    <Typography component="section" className={classes.section}>
      <SectionHeader title={title} content={content} primaryColor="white" secondaryColor="white" />
      <OurTechnologyDetails />
    </Typography>
  )
}