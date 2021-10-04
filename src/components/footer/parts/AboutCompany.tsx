import { Link, List, Typography } from "@mui/material";


export default function AboutCompany() {
  return (
    <Typography component="div">

      <Typography component="div">
        <Typography component="p">NOSSA EMPRESA</Typography>
        <List>
          <Link href="">Sobre</Link>
          <Link href="">Mídias</Link>
          <Link href="">Contato</Link>
        </List>
      </Typography>

      <Typography component="div">
        <Typography component="p">CHECKPOINT</Typography>
        <List>
          <Link href="">Autenticação Blockchain</Link>
        </List>
      </Typography>

    </Typography >
  )
}