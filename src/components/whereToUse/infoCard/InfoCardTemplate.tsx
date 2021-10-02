import { useEffect } from 'react';

import { makeStyles } from "@material-ui/styles";
import { Paper, Typography } from "@mui/material";

import Aos from 'aos';
import 'aos/dist/aos.css'
import IDetails from '../../../interfaces/IDetails';

const useStyles = makeStyles({
  paperContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '728px',
    height: '180px',
    padding: '16px',
    marginTop: '40px',
    border: 'none',
    boxShadow: 'none'
  },

  textContainer: {
    height: '148px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around'
  },

  header6: {
    color: '#718096'
  },

  paragraph: {
    fontSize: '1.25rem'
  }

});

export default function InfoCardTemplate(props: IDetails) {

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, [])

  const classes = useStyles();

  return (
    <Paper component="div" className={classes.paperContainer} data-aos="fade-up">
      <img style={{
        width: '180px',
        height: '180px'
      }} src={props.source} alt={props.legend} />
      <Typography component="div" className={classes.textContainer}>
        <Typography component="h6" className={classes.header6}>{props.title}</Typography>
        <Typography component="h6" className={classes.paragraph}>{props.content}</Typography>
      </Typography>
    </Paper>
  )
}