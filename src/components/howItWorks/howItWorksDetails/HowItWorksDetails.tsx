import { makeStyles } from "@material-ui/styles";
import { List } from "@mui/material";
import IDetails from "../../../interfaces/IDetails";
import HowItWorksTemplate from "./howItWorksTemplate/HowItWorksTemplate";

const howItWorksDetails: IDetails[] =
  [
    {
      source: './images/log-in.png',
      legend: 'Crie sua conta',
      title: 'CRIE SUA CONTA',
      content: 'Crie sua conta online em menos de 1 minuto clicando aqui.'
    },
    {
      source: './images/checkbox.png',
      legend: 'Amazon Web Services',
      title: 'ESCOLHA SEU PLANO',
      content: 'Quando fizer seu primeiro acesso, você deve escolher o seu plano.'
    },
    {
      source: './images/user-share.png',
      legend: 'Comece a usar',
      title: 'COMECE A USAR',
      content: 'Pronto! Já pode começar a utilizar, consultar o calendário de vacinação atualizado e compartilhar seu cartão com sua escola. Seja bem vindo!'
    }
  ]

const useStyles = makeStyles({
  container: {
    display: 'flex',
    justifyContent: 'center'
  }
});

export default function HowItWorksDetails() {
  const classes = useStyles();

  return (
    <List className={classes.container}>
      {howItWorksDetails.map((data, index) => {
        return <HowItWorksTemplate key={index} source={data.source} legend={data.legend} title={data.title} content={data.content} />
      })}
    </List>
  )
}