import { FC } from "react";
import Link from "next/link";
import Image from "next/image";
import { useTheme, Theme } from "@emotion/react";
// Props
import FooterProps from "./FooterProps";
// Styles
import { Grid, FooterContainer } from "./styles"
/**Files */
import emailLight from "../../../public/assets/icons/emailLight.svg";
import emailDark from "../../../public/assets/icons/emailDark.svg";
import githubLight from "../../../public/assets/icons/githubLight.svg";
import githubDark from "../../../public/assets/icons/githubDark.svg";
import researchgateDark from "../../../public/assets/icons/researchgateDark.svg";
import researchgateLight from "../../../public/assets/icons/researchgateLight.svg";
import linkedinDark from "../../../public/assets/icons/linkedinDark.svg";
import linkedinLight from "../../../public/assets/icons/linkedinLight.svg";

const Footer: FC<FooterProps> = ({ t }) => {
  const theme: Theme = useTheme();
  return (
    <Grid>
      <FooterContainer>
        <p className="p1">{t("footer.copy").replace("$YEAR", String((new Date()).getFullYear()))}</p>
        <div>
          <Link rel="external" href="https://github.com/leonardojacomussi" target="_blank">
            <Image
              width={32}
              height={32}
              loading="lazy"
              alt={t("home.about.github")}
              title={t("home.about.github")}
              src={theme.theme === "dark" ? githubLight.src : githubDark.src}
            />
          </Link>
          <Link rel="external" href="https://www.linkedin.com/in/leonardo-jacomussi/" target="_blank">
            <Image
              width={32}
              height={32}
              loading="lazy"
              alt={t("home.about.linkedin")}
              title={t("home.about.linkedin")}
              src={theme.theme === "dark" ? linkedinLight.src : linkedinDark.src}
            />
          </Link>
          <Link rel="external" href="https://www.researchgate.net/profile/Leonardo-Jacomussi" target="_blank">
            <Image
              width={32}
              height={32}
              loading="lazy"
              alt={t("home.about.researchgate")}
              title={t("home.about.researchgate")}
              src={theme.theme === "dark" ? researchgateLight.src : researchgateDark.src}
            />
          </Link>
          <Link rel="external" href="mailto:dev@leonardojacomussi.com" target="_blank">
            <Image
              width={32}
              height={32}
              loading="lazy"
              alt="Email"
              title="Email"
              src={theme.theme === "dark" ? emailLight.src : emailDark.src}
            />
          </Link>
        </div>
        <Link rel="external" className="a" href="https://www.buymeacoffee.com/jacomussi" target="_blank">{t("footer.coffee")}</Link>
      </FooterContainer>
    </Grid>
  );
};

export default Footer;