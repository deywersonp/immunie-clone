import { Facebook, Instagram, Pinterest, Twitter } from "@material-ui/icons"
import { Link, List, Typography } from "@mui/material"


export default function SocialMedias() {
  return (
    <Typography component="div">
      <Typography component="p">Redes Sociais</Typography>
      <List>
        <Link>
          <Facebook />
        </Link>
        <Link>
          <Instagram />
        </Link>
        <Link>
          <Twitter />
        </Link>
        <Link>
          <Pinterest />
        </Link>
      </List>
    </Typography >
  )
}