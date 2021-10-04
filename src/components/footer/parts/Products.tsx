import { Link, List, Typography } from "@mui/material";

export default function Products() {
  return (
    <Typography component="div">
      <Typography component="p">PRODUTOS</Typography>
      <List>
        <Link href="">Pessoas</Link>
        <Link href="">Setor de Saúde</Link>
        <Link href="">Laboratórios de Exames</Link>
        <Link href="">Companhias Aéreas</Link>
        <Link href="">Escolas</Link>
        <Link href="">Governos e Grandes Eventos</Link>
      </List>
    </Typography>
  )
}