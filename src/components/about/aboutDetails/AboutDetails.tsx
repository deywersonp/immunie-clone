import { makeStyles } from "@material-ui/styles";
import { List, Typography } from "@mui/material";
import IDetails from "../../../interfaces/IDetails";

import DetailsTemplate from "./detailsTemplate/DetailsTemplate";

const useStyles = makeStyles({
  container: {
    display: 'flex',
    justifyContent: 'flex-end'
  }
});

const detailsData: IDetails[] =
  [
    {
      source: './images/lock.png',
      legend: 'Segurança',
      title: 'Seguro',
      content: 'Não se preocupe mais em guardar cartões de papel com um registro digital seguro.'
    },
    {
      source: './images/intelligence.png',
      legend: 'Inteligência',
      title: 'Inteligente',
      content: 'Sempre que o calendário oficial de vacinação é alterado, sua Carteira Digital é atualizada automaticamente.'
    },
    {
      source: './images/on-date.png',
      legend: 'Sempre em dia',
      title: 'Sempre em dia',
      content: 'Saiba antes quando você deve tomar sua próxima vacina com lembretes por mensagem e email.'
    }
  ]

export default function AboutDetails() {
  const classes = useStyles();

  return (
    <Typography component="div" className={classes.container}>
      <List>
        {detailsData.map((item, index) => {
          return <DetailsTemplate key={index} source={item.source} legend={item.legend} title={item.title} content={item.content} />
        })}
      </List>
    </Typography>
  )
}