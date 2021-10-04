import { Typography } from "@mui/material";
import { makeStyles } from "@material-ui/styles";

import SocialMedias from './parts/SocialMedias';
import AboutCompany from "./parts/AboutCompany";
import TermsOfUse from "./parts/TermsOfUse";
import Products from "./parts/Products";

const useStyles = makeStyles({
  container: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    padding: '96px 0',
    backgroundColor: '#1b1642'
  }
});

export default function Footer() {
  const classes = useStyles();

  return (
    <Typography component="footer" className={classes.container}>
      <SocialMedias />
      <AboutCompany />
      <TermsOfUse />
      <Products />
    </Typography>
  )
}