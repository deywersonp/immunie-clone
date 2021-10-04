import { Typography } from "@mui/material";

import SocialMedias from './parts/SocialMedias';
import AboutCompany from "./parts/AboutCompany";
import TermsOfUse from "./parts/TermsOfUse";
import Products from "./parts/Products";

export default function Footer() {
  return (
    <Typography component="footer">
      <SocialMedias />
      <AboutCompany />
      <TermsOfUse />
      <Products />
    </Typography>
  )
}