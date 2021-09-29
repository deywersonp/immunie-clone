import { Toolbar } from "@mui/material";
import NavBar from "./navbar/NavBar";

function handleClick() {
  window.location.href = "https://immunie.net/";
}

export default function Header() {
  return (
    <Toolbar sx={{
      alignItems: 'center',
      justifyContent: 'space-between'
    }}>
      <img style={{ cursor: 'pointer' }} onClick={handleClick} src="./images/logo-immunie.png" alt="Immunie Logo" />
      <NavBar />
    </Toolbar >
  )
}