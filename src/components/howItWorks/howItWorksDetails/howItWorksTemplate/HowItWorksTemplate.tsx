import { makeStyles } from "@material-ui/styles";
import { Typography } from "@mui/material";
import IDetails from "../../../../interfaces/IDetails";

const useStyles = makeStyles({
  container: {
    backgroundColor: 'white',
    width: '346px',
    height: '296px',
    padding: '48px 24px',
    margin: '0 15px',
    border: '1px solid #e0e1e4',
    borderRadius: '5px',
    transition: '.3s',
    '&:hover': {
      transform: 'translateY(-2%)',
      boxShadow: '0 0 30px #c9cbce'
    }
  },

  imageContainer: {
    width: '40px',
    height: '40px',
    marginBottom: '8px'
  },

  header6: {
    fontSize: '1.25rem',
    fontWeight: 'bold',
    padding: '8px 0'
  },

  paragraph: {
    padding: '8px 0'
  }

})

export default function HowItWorksTemplate(props: IDetails) {
  const classes = useStyles();

  return (
    <Typography component="div" className={classes.container}>
      <Typography component="div" className={classes.imageContainer}>
        <img src={props.source} alt={props.legend} />
      </Typography>
      <Typography component="h6" color="textPrimary" className={classes.header6}>{props.title}</Typography>
      <Typography component="p" color="textSecondary" className={classes.paragraph}>{props.content}</Typography>
    </Typography>
  )
}