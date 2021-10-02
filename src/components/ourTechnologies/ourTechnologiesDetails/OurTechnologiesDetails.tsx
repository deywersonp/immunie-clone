import { useEffect } from "react";

import { makeStyles } from "@material-ui/styles";
import { List } from "@mui/material";

import OurTechnologyTemplate from "./ourTechnologiesTemplate/OurTechnologiesTemplate";
import IDetails from "../../../interfaces/IDetails";

import Aos from 'aos';
import 'aos/dist/aos.css';

const useStyles = makeStyles({
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }
});

const ourTechnologyData: IDetails[] =
  [
    {
      source: './images/london-business-school.png',
      legend: 'London Business School Incubator',
      title: 'LBS Incubator',
      content: 'Temos orgulho de fazer parte da edição 2020-2021 da Incubadora da London Business School, uma das melhores escolas de negócios do mundo.'
    },
    {
      source: './images/aws.png',
      legend: 'Amazon Web Services',
      title: 'Amazon Web Services',
      content: 'A infraestrutura em nuvem global mais segura, abrangente e confiável para aplicativos.'
    },
    {
      source: './images/pwa.png',
      legend: 'Progressive Web Application',
      title: 'PWA',
      content: 'O Progressive Web Apps representa uma das maiores apostas de empresas como Google e Microsoft para o futuro.'
    }
  ]

export default function OurTechnologyDetails() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, [])

  const classes = useStyles();

  return (
    <List className={classes.container} data-aos="fade-up">
      {ourTechnologyData.map((data, index) => {
        return <OurTechnologyTemplate key={index} source={data.source} legend={data.legend} title={data.title} content={data.content} />
      })}
    </List>
  )
}