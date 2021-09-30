import { makeStyles } from "@material-ui/styles";
import { List, Typography } from "@mui/material";
import IDetails from "../interfaces/IDetails";
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
        <DetailsTemplate source={detailsData[0].source} legend={detailsData[0].legend} title={detailsData[0].title} content={detailsData[0].content} />
        <DetailsTemplate source={detailsData[1].source} legend={detailsData[1].legend} title={detailsData[1].title} content={detailsData[1].content} />
        <DetailsTemplate source={detailsData[2].source} legend={detailsData[2].legend} title={detailsData[2].title} content={detailsData[2].content} />
      </List>
    </Typography>
  )
}