import { makeStyles } from "@material-ui/styles";
import { Link, List, Typography } from "@mui/material";

const useStyles = makeStyles({
  container: {
    padding: '16px 64px'
  },

  list: {
    display: 'flex',
    flexDirection: 'column'
  },

  link: {
    color: 'rgba(255,255,255,.6)',
    textDecoration: 'none'
  }
});

export default function TermsOfUse() {
  const classes = useStyles();

  return (
    <Typography component="div" className={classes.container}>
      <Typography component="p" color="white">TERMOS DE USO</Typography>
      <List className={classes.list}>
        <Link href="https://immunie.net/terms-of-use/privacy-policy" className={classes.link}>Política de Privacidade</Link>
        <Link href="https://immunie.net/terms-of-use/terms-and-conditions" className={classes.link}>Termos e Condições</Link>
        <Link href="https://immunie.net/terms-of-use/faqs" className={classes.link}>FAQs</Link>
      </List>
    </Typography>
  )
}