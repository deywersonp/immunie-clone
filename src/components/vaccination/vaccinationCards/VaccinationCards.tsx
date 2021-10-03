import { useEffect, useState } from "react";

import { CardActionArea, List, Typography } from "@mui/material";
import { KeyboardArrowRight } from "@material-ui/icons";
import { makeStyles } from "@material-ui/styles";
import ISectionHeader from "../../../interfaces/ISectionHeader";

import Aos from 'aos';
import 'aos/dist/aos.css';

const useStyles = makeStyles({

  card: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '16px',
    border: '1px solid #e0e1e4',
    borderRadius: '10px',
    transition: '.3s',
    marginTop: '20px',
    '&:hover': {
      color: 'white !important',
      backgroundColor: '#3f51b5',
    }
  },

  textContainer: {
    width: '548px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '8px'
  },

  header6: {
    fontSize: '1.25rem',
    fontWeight: 'bold'
  },

  default: {
    color: '#718096'
  },

  hover: {
    color: 'white !important'
  }
});

const cardData: ISectionHeader[] = [
  {
    title: 'Calendário Nacional de Vacinação 2020',
    content: 'PNI/MS'
  },
  {
    title: 'Calendário de Vacinação da SBP',
    content: 'SBP/2020'
  },
  {
    title: 'Calendário Único SBIm',
    content: '2020/Sociedade Brasileira de Imunização'
  },
]

export default function VaccinationCards() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  const classes = useStyles();

  let newColor0: any;
  let newColor1: any;
  let newColor2: any;

  const [color0, setColor0] = useState(false)
  const [color1, setColor1] = useState(false)
  const [color2, setColor2] = useState(false)

  const handle0 = () => { setColor0(true) };
  const removeHandle0 = () => { setColor0(false) };

  const handle1 = () => { setColor1(true) };
  const removeHandle1 = () => { setColor1(false) };

  const handle2 = () => { setColor2(true) };
  const removeHandle2 = () => { setColor2(false) };

  color0 ? newColor0 = classes.hover : newColor0 = classes.default;
  color1 ? newColor1 = classes.hover : newColor1 = classes.default;
  color2 ? newColor2 = classes.hover : newColor2 = classes.default;

  return (
    <List data-aos="fade-up">
      <CardActionArea
        onMouseOver={handle0}
        onMouseOut={removeHandle0}
        href="https://immunie.net/company/media-assets"
        className={classes.card}>
        <Typography component="div" className={classes.textContainer}>
          <Typography component="h6" className={classes.header6}>{cardData[0].title}</Typography>
          <Typography component="h6" className={newColor0}>{cardData[0].content}</Typography>
        </Typography>
        <KeyboardArrowRight />
      </CardActionArea>

      <CardActionArea
        onMouseOver={handle1}
        onMouseOut={removeHandle1}
        href="https://immunie.net/company/media-assets"
        className={classes.card}>
        <Typography component="div" className={classes.textContainer}>
          <Typography component="h6" className={classes.header6}>{cardData[1].title}</Typography>
          <Typography component="h6" className={newColor1}>{cardData[1].content}</Typography>
        </Typography>
        <KeyboardArrowRight />
      </CardActionArea>

      <CardActionArea
        onMouseOver={handle2}
        onMouseOut={removeHandle2}
        href="https://immunie.net/company/media-assets"
        className={classes.card}>
        <Typography component="div" className={classes.textContainer}>
          <Typography component="h6" className={classes.header6}>{cardData[2].title}</Typography>
          <Typography component="h6" className={newColor2}>{cardData[2].content}</Typography>
        </Typography>
        <KeyboardArrowRight />
      </CardActionArea>
    </List>
  )
}