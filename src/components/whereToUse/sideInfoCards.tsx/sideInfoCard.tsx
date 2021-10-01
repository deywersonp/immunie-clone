import { makeStyles } from "@material-ui/styles";
import { Typography } from "@mui/material";
import SideInfoCardDown from "./parts/sideInfoCardDown";
import SideInfoCardTop from "./parts/sideInfoCardTop";

const useStyles = makeStyles({
  container: {
    marginLeft: '40px'
  }
});


export default function SideInfoCard() {
  const classes = useStyles();

  return (
    <Typography component="div" className={classes.container}>
      <SideInfoCardTop />
      <SideInfoCardDown />
    </Typography>
  )
}