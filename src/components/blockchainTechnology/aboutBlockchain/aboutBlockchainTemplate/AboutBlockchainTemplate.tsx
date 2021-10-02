import { useEffect } from "react";

import { makeStyles } from "@material-ui/styles";
import { List, Typography } from "@mui/material";

import Aos from 'aos';
import 'aos/dist/aos.css';

const useStyles = makeStyles({
  container: {
    display: 'flex',
    alignItems: 'center',
    padding: '8px 0'
  },

  header6: {
    paddingLeft: '12px'
  }
});


const aboutBlockchainData: { content: string }[] = [
  {
    content: 'Disponibilidade Global'
  },
  {
    content: 'Aplicação Mobile e Web'
  },
  {
    content: 'Tecnologia PWA em qualquer smartphone'
  }
]

export default function AboutBlockchainTemplate() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  const classes = useStyles();

  return (
    <List>
      {aboutBlockchainData.map((data, index) => {
        return (
          <Typography key={index} component="div" className={classes.container} data-aos="fade-up">
            <img src="./images/yellow-check.png" alt="Marcador de confirmação amarelo" />
            <Typography component="h6" className={classes.header6}>{data.content}</Typography>
          </Typography>
        )
      })}
    </List>
  )
}