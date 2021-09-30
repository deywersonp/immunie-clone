import { useEffect } from "react";

import { makeStyles } from "@material-ui/styles";
import { ListItem, Typography } from "@mui/material";
import IDetails from "../../interfaces/IDetails";

import Aos from 'aos';
import 'aos/dist/aos.css'

const useStyles = makeStyles({
  container: {
    width: '520px',
    display: 'flex',
    alignItems: 'center',
    marginRight: '50px',
    marginBottom: '10px'
  },

  span: {
    fontSize: '1.25rem',
    fontWeight: 'bold',
    fontFamily: 'Lato',
  },

  header6: {
    fontSize: '1rem',
    fontFamily: 'Lato',
    lineHeight: '1.75',
    marginTop: '10px'
  }
});

export default function DetailsTemplate(props: IDetails) {
  const classes = useStyles();

  useEffect(() => {
    Aos.init({ duration: 1000 })
  }, []);

  return (
    <ListItem className={classes.container} data-aos="fade-up">
      <img style={{ transform: 'translateY(-16%)', marginRight: '15px' }} src={props.source} alt={props.legend} />
      <Typography component="div">
        <Typography color="textPrimary" component="span" className={classes.span}>{props.title}</Typography>
        <Typography color="textPrimary" component="h6" className={classes.header6}>{props.content}</Typography>
      </Typography>
    </ListItem>
  )
}