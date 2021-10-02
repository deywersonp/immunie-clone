import IDetails from "../../../interfaces/IDetails";

import { Typography } from "@mui/material";
import InfoCardTemplate from "./InfoCardTemplate";


const cardsData: IDetails[] =
  [
    {
      source: './images/clinic.png',
      legend: 'Clínicas',
      title: 'CLÍNICAS',
      content: 'Basta conectar sua carteira digital à sua clínica para que seu médico possa fazer o registro de novas vacinas.'
    },
    {
      source: './images/school.png',
      legend: 'Escolas',
      title: 'ESCOLAS',
      content: 'Compartilhe o cartão de vacinação, fiche de saúde, alergias e contatos de emergência em um clique.'
    },
    {
      source: './images/travelling.png',
      legend: 'Viagens',
      title: 'VIAJANDO',
      content: 'Você decide quando enviar resultados de seus exames para companhias aéreas por via digital, permitindo o Check In online.'
    },
    {
      source: './images/events.png',
      legend: 'Eventos Esportivos',
      title: 'EVENTOS ESPORTIVOS',
      content: 'Evite filas e aglomerações conectando o resultado de testes com o emissor do ingresso eletrônico.'
    }
  ]


export default function InfoCards() {
  return (
    <Typography component="div">
      {cardsData.map((card, index) => {
        return <InfoCardTemplate key={index} source={card.source} legend={card.legend} title={card.title} content={card.content} />
      })}
    </Typography>
  )
}