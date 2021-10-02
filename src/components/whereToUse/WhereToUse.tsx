import SectionHeader from "../sectionHeader/SectionHeader";

import { Typography } from "@mui/material";
import { makeStyles } from "@material-ui/styles";
import InfoCards from "./infoCard/InfoCards";
import SideInfoCard from "./sideInfoCards.tsx/sideInfoCard";

const useStyles = makeStyles({
  container: {
    backgroundColor: '#f7f9fa',
    paddingTop: '80px'
  },

  section: {
    display: 'flex',
    justifyContent: 'center'
  }
});

export default function WhereToUse() {
  const classes = useStyles();

  const title = 'Aonde usar';
  const content = 'Torne sua vida mais fácil com Immunie. Sem papel, sem preocupações.';

  return (
    <Typography component="div" className={classes.container}>
      <SectionHeader title={title} content={content} />
      <Typography component="section" className={classes.section}>
        <InfoCards />
        <SideInfoCard />
      </Typography>
    </Typography>
  )
}