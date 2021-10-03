import { makeStyles } from "@material-ui/styles";
import { Divider, Typography } from "@mui/material";

import ListTemplate from "./listTemplate/ListTemplate";

import ISectionHeader from "../../../../interfaces/ISectionHeader";
import IListItem from "../../../../interfaces/IListItem";

const listItem: IListItem[] =
  [
    {
      text1: 'Calendário de Vacinação Atualizado',
      text2: 'Integração com Escolas',
      text3: 'Ficha de Saúde',
      text4: 'Contatos de Emergência',
      text5: 'Carteira de Exames',
      availableTestMessage: false,
      buttonVariant: 'outlined'
    },
    {
      text1: 'Todos os recursos do Plano Starter',
      text2: 'Lembretes por email e PUSH',
      text3: 'Integração com Clínicas',
      text4: 'Carteira Digital de Vacinação',
      text5: 'Autenticação Blockchain',
      availableTestMessage: true,
      buttonVariant: 'contained'
    },
    {
      text1: 'Todos os recursos do Plano Full',
      text2: '12 idiomas',
      text3: 'Certificado Internacional',
      text4: 'Exames Certificados',
      text5: 'Testes para Viajem',
      availableTestMessage: true,
      buttonVariant: 'outlined'
    }
  ]

const useStyles = makeStyles({
  container: {
    textAlign: 'center',
    backgroundColor: 'white',
    width: '346px',
    height: '561.4px',
    display: 'flex',
    flexDirection: 'column',
    padding: '48px 24px',
    margin: '0 15px',
    border: '1px solid #e0e1e4',
    borderRadius: '5px',
    transition: '.3s',
    '&:hover': {
      transform: 'translateY(-1%)',
      boxShadow: '0 0 30px #c9cbce'
    }
  },

  header5: {
    fontSize: '1.25rem',
    fontWeight: 'bold',
    padding: '8px 0'
  },

  divider: {
    margin: '16px 0'
  }
})

export default function OurPlansTemplate(titleData: ISectionHeader) {
  const classes = useStyles();

  let index: any

  if (titleData.title === 'Starter') {
    index = listItem[0];
  } else if (titleData.title === 'Full') {
    index = listItem[1];
  } else {
    index = listItem[2];
  }

  return (
    <Typography component="div" className={classes.container}>
      <Typography component="h5" color="textPrimary" className={classes.header5}>{titleData.title}</Typography>
      <Typography component="h6" color="textSecondary">{titleData.content}</Typography>
      <Divider className={classes.divider} />
      <ListTemplate
        text1={index.text1}
        text2={index.text2}
        text3={index.text3}
        text4={index.text4}
        text5={index.text5}
        availableTestMessage={index.availableTestMessage}
        buttonVariant={index.buttonVariant} />
    </Typography>
  )
}