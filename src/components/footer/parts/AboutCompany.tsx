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


export default function AboutCompany() {
  const classes = useStyles();

  return (
    <Typography component="div" className={classes.container}>

      <Typography component="div">
        <Typography component="p" color="white">NOSSA EMPRESA</Typography>
        <List className={classes.list}>
          <Link href="https://immunie.net/company/about" className={classes.link}>Sobre</Link>
          <Link href="https://immunie.net/company/media-assets" className={classes.link}>Mídias</Link>
          <Link href="https://immunie.net/company/contact" className={classes.link}>Contato</Link>
        </List>
      </Typography>

      <Typography component="div">
        <Typography component="p" color="white">CHECKPOINT</Typography>
        <List className={classes.list}>
          <Link href="https://www.checkpoint.immunie.net/" className={classes.link}>Autenticação Blockchain</Link>
        </List>
      </Typography>

    </Typography >
  )
}