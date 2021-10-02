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
        width: '200px',
        height: '180px'
      }} src={props.source} alt={props.legend} />
      <Typography component="div">
        <Typography component="h6">{props.title}</Typography>
        <Typography component="h6">{props.content}</Typography>
      </Typography>
    </Paper>
  )
}