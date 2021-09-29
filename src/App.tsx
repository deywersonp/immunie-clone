import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import { Divider } from "@mui/material";
import Banner from "./components/banner/Banner";
import Header from "./components/header/Header";
import theme from './theme';

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
        </div>
      </ThemeProvider>

    </div>
  );
}