import { makeStyles } from "@material-ui/styles";
import { CheckCircleOutline } from "@material-ui/icons";
import { Button, List, ListItem, Typography } from "@mui/material";
import IListItem from "../../../../../interfaces/IListItem";

const useStyles = makeStyles({
  listItem: {
    padding: '8px 0'
  },

  header6: {
    width: '298.32px',
    fontSize: '1.25rem',
    padding: '3px 0',
    marginLeft: '5px',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis'
  },

  btn: {
    padding: '8px 0',
    margin: '16px 0'
  },

  showTestMessage: {
    visibility: 'visible',
    fontSize: '.75rem'
  },

  hideTestMessage: {
    visibility: 'hidden'
  }
})

export default function ListTemplate(listContent: IListItem) {
  const classes = useStyles();

  let testMessage: any;

  if (listContent.availableTestMessage === true) {
    testMessage = classes.showTestMessage;
  } else {
    testMessage = classes.hideTestMessage;
  };

  return (
    <>
      <List>
        <ListItem className={classes.listItem}>
          <CheckCircleOutline color="primary" />
          <Typography component="h6" className={classes.header6}>{listContent.text1}</Typography>
        </ListItem>
        <ListItem className={classes.listItem}>
          <CheckCircleOutline color="primary" />
          <Typography component="h6" className={classes.header6}>{listContent.text2}</Typography>
        </ListItem>
        <ListItem className={classes.listItem}>
          <CheckCircleOutline color="primary" />
          <Typography component="h6" className={classes.header6}>{listContent.text3}</Typography>
        </ListItem>
        <ListItem className={classes.listItem}>
          <CheckCircleOutline color="primary" />
          <Typography component="h6" className={classes.header6}>{listContent.text4}</Typography>
        </ListItem>
        <ListItem className={classes.listItem}>
          <CheckCircleOutline color="primary" />
          <Typography component="h6" className={classes.header6}>{listContent.text5}</Typography>
        </ListItem>
      </List>
      <Button href="https://www.app.immunie.net/" variant={listContent.buttonVariant} color="primary" className={classes.btn}>CRIAR MINHA CONTA</Button>
      <Typography className={testMessage} component="p">Experimente grátis por 90 dias</Typography>
    </>
  )
}