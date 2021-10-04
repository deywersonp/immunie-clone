import { Facebook, Instagram, Pinterest, Twitter } from "@material-ui/icons"
import { makeStyles } from "@material-ui/styles";
import { Link, List, Typography } from "@mui/material"

const useStyles = makeStyles({
  container: {
    padding: '16px 64px'
  },

  link: {
    color: 'rgba(255,255,255,.6)',
    paddingRight: '6px'
  }
});

export default function SocialMedias() {
  const classes = useStyles();

  return (
    <Typography component="div" className={classes.container}>
      <Typography component="p" color="white">Redes Sociais</Typography>
      <List>
        <Link className={classes.link}>
          <Facebook />
        </Link>
        <Link className={classes.link}>
          <Instagram />
        </Link>
        <Link className={classes.link}>
          <Twitter />
        </Link>
        <Link className={classes.link}>
          <Pinterest />
        </Link>
      </List>
    </Typography >
  )
}