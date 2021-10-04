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

export default function Products() {
  const classes = useStyles();

  return (
    <Typography component="div" className={classes.container}>
      <Typography component="p" color="white">PRODUTOS</Typography>
      <List className={classes.list}>
        <Link href="https://immunie.net/products/people" className={classes.link}>Pessoas</Link>
        <Link href="https://immunie.net/products/health-care" className={classes.link}>Setor de Saúde</Link>
        <Link href="https://immunie.net/products/labs" className={classes.link}>Laboratórios de Exames</Link>
        <Link href="https://immunie.net/products/travel" className={classes.link}>Companhias Aéreas</Link>
        <Link href="https://immunie.net/products/schools" className={classes.link}>Escolas</Link>
        <Link href="https://immunie.net/products/managers" className={classes.link}>Governos e Grandes Eventos</Link>
      </List>
    </Typography>
  )
}