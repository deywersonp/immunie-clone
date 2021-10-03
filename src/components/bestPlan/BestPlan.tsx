import { useEffect } from "react";

import { makeStyles } from "@material-ui/styles";
import { Typography } from "@mui/material";

import SectionHeader from "../sectionHeader/SectionHeader";
import BestPlanDetails from "./bestPlanDetails/BestPlanDetails";
import ISectionHeader from "../../interfaces/ISectionHeader";

import Aos from 'aos';
import 'aos/dist/aos.css';


const bestPlanData: ISectionHeader[] = [
  {
    title: "Starter",
    content: "Calendário sempre atualizado e integração com escolas de forma segura.",
    textButton: "Saber Mais"
  },

  {
    title: "Premium",
    content: "Guarde suas informações, receba lembretes e viaje tranquilo com certificados traduzidos para 12 idiomas.",
    textButton: "Teste Grátis"
  }
]

const useStyles = makeStyles({
  section: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    padding: '96px 64px',
  },

  container: {
    display: 'flex'
  }
});


export default function BestPlan() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  });

  const classes = useStyles();

  const title = "Qual o melhor para mim?";
  const content = "Comece.";

  return (
    <Typography component="section" className={classes.section}>
      <SectionHeader title={title} content={content} />
      <Typography component="div" className={classes.container} data-aos="fade-up">
        {bestPlanData.map((item) => {
          return <BestPlanDetails title={item.title} content={item.content} textButton={item.textButton} />
        })}
      </Typography>
    </Typography>
  )
}