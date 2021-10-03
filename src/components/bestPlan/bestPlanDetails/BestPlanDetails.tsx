import { makeStyles } from "@material-ui/styles";
import { Button, Typography } from "@mui/material";
import ISectionHeader from "../../../interfaces/ISectionHeader";

const useStyles = makeStyles({
  card: {
    backgroundColor: 'rgb(247, 249, 250)',
    width: '538px',
    height: '276px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    padding: '16px',
    margin: '16px 8px',
    borderRadius: '15px'
  },

  textContainer: {
    width: '229px'
  },

  header6: {
    fontSize: '1.25rem',
    fontWeight: 'bold'
  },

  secondHeader6: {
    padding: '16px 0'
  }
});

export default function BestPlanDetails(props: ISectionHeader) {
  const classes = useStyles();

  return (
    <Typography component="div" className={classes.card}>
      <img
        style={{
          width: '150px',
          height: '161px'
        }}
        src="./images/our-plans.png"
        alt="Nossos Planos" />
      <Typography component="div" className={classes.textContainer}>
        <Typography component="h6" className={classes.header6}>{props.title}</Typography>
        <Typography component="h6" className={classes.secondHeader6}>{props.content}</Typography>
        <Button
          href="https://immunie.net/company/media-assets"
          variant="contained"
          color="primary">
          {props.textButton}
        </Button>
      </Typography>
    </Typography>
  )
}