import { Link, List, Typography } from "@mui/material";


export default function TermsOfUse() {
  return (
    <Typography component="div">
      <Typography component="p">TERMOS DE USO</Typography>
      <List>
        <Link href="">Política de Privacidade</Link>
        <Link href="">Termos e Condições</Link>
        <Link href="">FAQs</Link>
      </List>
    </Typography>
  )
}