import { makeStyles } from '@material-ui/styles';
import { visuallyHidden } from '@material-ui/utils';
import { Link, List, Typography, Button, MenuItem, FormControl, InputLabel, Select } from '@mui/material';
import { Group, LocalHospital, ArrowDropDown, LanguageOutlined } from '@material-ui/icons';

const useStyles = makeStyles({
  linkMargin: {
    marginRight: '30px'
  },

  green: {
    color: 'rgb(35, 105, 60)',
    marginRight: '30px'
  },

  services: {
    display: 'flex',
    cursor: 'pointer',
    marginRight: '30px',
    textDecoration: 'none',
    color: '#2d3748',
    '&:hover': {
      color: '#496ccc'
    }
  },

  btn: {
    textTransform: 'none',
    padding: '6px 24px',
    marginRight: '30px'
  },

  languageContainer: {
    display: 'flex',
    alignItems: 'center'
  },

  languageIcon: {
    color: '#707e8b',
    width: '18px',
    marginRight: '4px'
  }
});

export default function NavBar() {
  const classes = useStyles();

  return (
    <List sx={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
    }}>
      <Link href="https://immunie.net/passeverde" underline="none" className={classes.green}>
        <Typography component="p" sx={{ fontWeight: 'bold' }}>Passe Verde</Typography>
      </Link>
      <Link className={classes.services}>
        <Typography component="p">Serviços</Typography>
        <ArrowDropDown sx={{ marginLeft: 2 }} />
      </Link>
      <Button href="https://secure.immunie.net/" className={classes.btn} color="secondary" variant="contained" size="small" startIcon={<LocalHospital />}>
        Clínicas
      </Button>
      <Button href="https://www.app.immunie.net/" className={classes.btn} color="primary" variant="contained" size="small" startIcon={<Group />}>
        Usuários
      </Button>

      <FormControl
        variant="standard">
        <InputLabel style={visuallyHidden} id="demo-customized-select-label">Language</InputLabel>
        <Typography className={classes.languageContainer} component="div">
          <LanguageOutlined className={classes.languageIcon} />
          <Select
            defaultValue="PT"
            labelId="demo-customized-select-label"
            id="demo-customized-select"
          >
            <MenuItem value="EN">EN</MenuItem>
            <MenuItem value="ES">ES</MenuItem>
            <MenuItem value="PT">PT</MenuItem>
          </Select>
        </Typography>
      </FormControl>
    </List >
  )
}