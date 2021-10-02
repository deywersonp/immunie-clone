import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';
import CssBaseline from '@mui/material/CssBaseline';

import { Divider, Typography } from "@mui/material";

import Banner from "./components/banner/Banner";
import Header from "./components/header/Header";
import About from './components/about/About';
import Privacy from './components/privacy/Privacy';
import WhereToUse from './components/whereToUse/WhereToUse';
import BlockchainTechnology from './components/blockchainTechnology/BlockchainTechnology';
import OurTechnologies from './components/ourTechnologies/OurTechnologies';
import HowItWorks from './components/howItWorks/HowItWorks';

export default function App() {
  return (
    <Typography component="div">
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header />
        <Divider />
        <Typography component="div">
          <Banner />
          <Divider />
          <About />
          <Privacy />
          <WhereToUse />
          <BlockchainTechnology />
          <OurTechnologies />
          <HowItWorks />
        </Typography>
      </ThemeProvider>
    </Typography>
  );
}