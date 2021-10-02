import { Typography } from "@mui/material";
import IDetails from "../../../../interfaces/IDetails";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  container: {
    width: '364px',
    height: '292px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0 8px'
  },

  imageContainer: {
    width: '140px',
    height: '140px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },

  textContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },

  header6: {
    fontSize: '1.25rem',
    fontWeight: 'bold',
    padding: '8px'
  },

  paragraph: {
    textAlign: 'center'
  }
});


export default function OurTechnologyTemplate(props: IDetails) {

  const classes = useStyles();

  return (
    <Typography component="div" className={classes.container}>
      <Typography component="div" className={classes.imageContainer}>
        <img src={props.source} alt={props.legend} />
      </Typography>
      <Typography component="div" className={classes.textContainer}>
        <Typography component="h6" color="white" className={classes.header6}>{props.title}</Typography>
        <Typography component="p" color="white" className={classes.paragraph}>{props.content}</Typography>
      </Typography>
    </Typography>
  )
}