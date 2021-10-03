import { useEffect } from 'react';

import { makeStyles } from "@material-ui/styles";
import { List } from "@mui/material";
import ISectionHeader from "../../../interfaces/ISectionHeader";
import OurPlansTemplate from "./ourPlansTemplate/OurPlansTemplate";

import Aos from 'aos';
import 'aos/dist/aos.css';

const ourPlansDetails: ISectionHeader[] =
  [
    {
      title: 'Starter',
      content: 'Comece a usar agora'
    },
    {
      title: 'Full',
      content: 'A pay once license, just for you'
    },
    {
      title: 'Premium',
      content: 'Sua carteira no Brasil e no Exterior'
    }
  ]

const useStyles = makeStyles({
  container: {
    display: 'flex',
    justifyContent: 'center'
  }
});

export default function OurPlansDetails() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, [])

  const classes = useStyles();

  return (
    <List className={classes.container} data-aos="fade-up">
      {ourPlansDetails.map((data, index) => {
        return <OurPlansTemplate
          key={index}
          title={data.title}
          content={data.content} />
      })}
    </List>
  )
}