import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';
import CssBaseline from '@mui/material/CssBaseline';

import { Divider } from "@mui/material";

import Banner from "./components/banner/Banner";
import Header from "./components/header/Header";
import About from './components/about/About';
import Privacy from './components/privacy/Privacy';
import WhereToUse from './components/whereToUse/WhereToUse';

export default function App() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header />
        <Divider />
        <div>
          <Banner />
          <Divider />
          <About />
          <Privacy />
          <WhereToUse />
        </div>
      </ThemeProvider>

    </div>
  );
}