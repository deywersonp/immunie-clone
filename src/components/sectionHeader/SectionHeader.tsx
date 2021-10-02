import { useEffect } from 'react';
import ISectionHeader from '../../interfaces/ISectionHeader';

import { makeStyles } from "@material-ui/styles";
import { Typography } from "@mui/material";

import Aos from 'aos';
import 'aos/dist/aos.css';

const useStyles = makeStyles({
  headersContainer: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    width: '100%',
    alignText: 'center'
  },

  header4: {
    fontWeight: 'bold',
    fontSize: '2.0243rem',
    padding: '8px'
  },

  header6: {
    fontSize: '1.25rem',
    padding: '8px'
  }
});

export default function SectionHeader(props: ISectionHeader) {
  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])

  const classes = useStyles();

  return (
    <Typography component="div" className={classes.headersContainer} data-aos="fade-up">
      <Typography component="h4" color="textPrimary" className={classes.header4}>{props.title}</Typography>
      <Typography component="h6" color="textSecondary" className={classes.header6}>{props.content}</Typography>
    </Typography>
  )
}