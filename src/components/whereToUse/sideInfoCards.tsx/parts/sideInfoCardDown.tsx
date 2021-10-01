import { useEffect } from "react";

import { makeStyles } from "@material-ui/styles";
import { Button, Typography } from "@mui/material";

import Aos from 'aos';
import 'aos/dist/aos.css'


const useStyles = makeStyles({
  card: {
    backgroundColor: 'white',
    width: '358px',
    height: '220px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    padding: '20px 30px',
    marginTop: '40px',
    borderRadius: '5px',
    boxShadow: '0 0 10px #ebecee'
  },

  header6: {
    color: '#2d3748',
    fontSize: '1.25rem',
    fontWeight: 'bold'
  },

  btn: {
    width: '140px'
  }
});


export default function SideInfoCardDown() {

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, [])

  const classes = useStyles();


  return (
    <Typography component="div" className={classes.card} data-aos="fade-up">
      <Typography component="h6" className={classes.header6}>
        Confira os principais Calendários de Vacinação
      </Typography>
      <Button href="https://immunie.net/company/media-assets" color="primary" variant="contained" className={classes.btn}>
        Confira Aqui
      </Button>
    </Typography>
  )
}