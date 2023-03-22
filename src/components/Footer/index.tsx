import { FC } from "react";
import Link from "next/link";
// Props
import FooterProps from "./FooterProps";
// Styles
import { Grid, FooterContainer } from "./styles"

const Footer: FC<FooterProps> = ({ t }) => {
  return (
    <Grid>
      <FooterContainer>
        <p className="p1">{t("footer.copy")}</p>
        <Link className="a" href="mailto:dev@leonardojacomussi.com" target="_blank">dev@leonardojacomussi.com</Link>
        <Link className="a" href="https://www.buymeacoffee.com/jacomussi" target="_blank">{t("footer.coffee")}</Link>
      </FooterContainer>
    </Grid>
  );
};

export default Footer;