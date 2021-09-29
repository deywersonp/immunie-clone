import { Toolbar } from "@mui/material";
import NavBar from "./navbar/NavBar";


export default function Header() {
  return (
    <Toolbar sx={{
      alignItems: 'center',
      justifyContent: 'space-between'
    }}>
      <img src="./images/logo-immunie.png" alt="Immunie Logo" />
      <NavBar />
    </Toolbar >
  )
}