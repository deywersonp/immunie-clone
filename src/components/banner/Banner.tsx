import { Typography } from "@mui/material";
import { makeStyles } from '@material-ui/styles';
import MainContent from "./mainContent/MainContent";


const useStyles = makeStyles({
  container: {
    width: '100%',
    height: '514px',
    backgroundImage: `url(./images/vaccine.png)`,
    backgroundPosition: 'center right',
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat'
  },

  divSkew: {
    width: '60%',
    height: '100%',
    backgroundColor: '#f7f9fa',
    transform: 'skew(-6deg) translateX(-16%)'
  },

  normalDiv: {
    transform: 'skew(+6deg) translateX(+16%)',
    width: 'calc(100% - 16)'
  }
});

export default function Banner() {
  const classes = useStyles();

  return (
    <Typography component="div" className={classes.container}>
      <Typography component="div" className={classes.divSkew}>
        <Typography component="div" className={classes.normalDiv} >
          <MainContent />
        </Typography>
      </Typography>
    </Typography>
  )
}