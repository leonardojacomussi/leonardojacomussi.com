import { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import { useTheme, Theme } from "@emotion/react";
/**Props */
import AboutMeProps from "./AboutMeProps";
/**Styles */
import {
  Grid, AboutMeContainer, Title, Subtitle, TechTitle,
  TechContent, TechItem, DescriptionContainer,
  NetworkContainer, NetworkItem
} from "./styles";
/**Files */
import githubLight from "../../../../../public/assets/icons/githubLight.svg";
import githubDark from "../../../../../public/assets/icons/githubDark.svg";
import researchgateDark from "../../../../../public/assets/icons/researchgateDark.svg";
import researchgateLight from "../../../../../public/assets/icons/researchgateLight.svg";
import linkedinDark from "../../../../../public/assets/icons/linkedinDark.svg";
import linkedinLight from "../../../../../public/assets/icons/linkedinLight.svg";
import nextjsLight from "../../../../../public/assets/icons/nextjsLight.svg";
import nextjsDark from "../../../../../public/assets/icons/nextjsDark.svg";
import reactjs from "../../../../../public/assets/icons/reactjs.webp";
import javascript from "../../../../../public/assets/icons/javascript.svg";
import typescript from "../../../../../public/assets/icons/typescript.svg";
import html from "../../../../../public/assets/icons/html.webp";
import css from "../../../../../public/assets/icons/css.webp";
import emotion from "../../../../../public/assets/icons/emotion.webp";
import figma from "../../../../../public/assets/icons/figma.webp";
import prismic from "../../../../../public/assets/icons/prismic.svg";
import mui from "../../../../../public/assets/icons/mui.webp";
import nodejs from "../../../../../public/assets/icons/nodejs.webp";
import python from "../../../../../public/assets/icons/python.webp";

const AboutMe: FC<AboutMeProps> = ({ t }): JSX.Element => {
  const theme: Theme = useTheme();
  return (
    <Grid id="about-me">
      <AboutMeContainer>
        <Title className="st1">{t("home.about.title")}</Title>
        <Subtitle className="hiddenY">{t("home.about.subtitle")}</Subtitle>
        <DescriptionContainer>
          <p className="p1 hiddenX delay100">
            {t("home.about.description1")}
          </p>
          <p className="p1 hiddenX delay100">
            {t("home.about.description2")}
          </p>
          <p className="p1 hiddenX delay100">
            {t("home.about.description3")}
          </p>
          <NetworkContainer  className="hiddenX delay100">
            <Link rel="external" href="https://github.com/leonardojacomussi" target="_blank">
              <NetworkItem title={t("home.about.github")}>
                <Image
                  width={32}
                  height={32}
                  loading="lazy"
                  alt={t("home.about.github")}
                  title={t("home.about.github")}
                  src={theme.theme === "dark" ? githubLight.src : githubDark.src}
                />
                <span>{t("home.about.github")}</span>
              </NetworkItem>
            </Link>
            <Link rel="external" href="https://www.linkedin.com/in/leonardo-jacomussi/" target="_blank">
              <NetworkItem title={t("home.about.linkedin")}>
                <Image
                  width={32}
                  height={32}
                  loading="lazy"
                  alt={t("home.about.linkedin")}
                  title={t("home.about.linkedin")}
                  src={theme.theme === "dark" ? linkedinLight.src : linkedinDark.src}
                />
                <span>{t("home.about.linkedin")}</span>
              </NetworkItem>
            </Link>
            <Link rel="external" href="https://www.researchgate.net/profile/Leonardo-Jacomussi" target="_blank">
              <NetworkItem title={t("home.about.researchgate")}>
                <Image
                  width={32}
                  height={32}
                  loading="lazy"
                  alt={t("home.about.researchgate")}
                  title={t("home.about.researchgate")}
                  src={theme.theme === "dark" ? researchgateLight.src : researchgateDark.src}
                />
                <span>{t("home.about.researchgate")}</span>
              </NetworkItem>
            </Link>
          </NetworkContainer>
        </DescriptionContainer>
        <TechTitle  className="hiddenY">{t("home.about.technology")}</TechTitle>
        <TechContent>
          <TechItem className="hiddenX delay100" title={t("home.about.nextjs")}>
            <Image
              width={50}
              height={50}
              loading="lazy"
              alt={t("home.about.nextjs")}
              title={t("home.about.nextjs")}
              src={theme.theme === "dark" ? nextjsLight.src : nextjsDark.src} />
          </TechItem>
          <TechItem className="hiddenX delay100" title={t("home.about.reactjs")}>
            <Image
              width={50}
              height={50}
              loading="lazy"
              alt={t("home.about.reactjs")}
              title={t("home.about.reactjs")}
              src={reactjs.src} />
          </TechItem>
          <TechItem className="hiddenX delay100" title={t("home.about.javascript")}>
            <Image
              width={50}
              height={50}
              loading="lazy"
              alt={t("home.about.javascript")}
              title={t("home.about.javascript")}
              src={javascript.src} />
          </TechItem>
          <TechItem className="hiddenX delay100" title={t("home.about.typescript")}>
            <Image
              width={50}
              height={50}
              loading="lazy"
              alt={t("home.about.typescript")}
              title={t("home.about.typescript")}
              src={typescript.src} />
          </TechItem>
          <TechItem className="hiddenX delay100" title={t("home.about.html")}>
            <Image
              width={50}
              height={50}
              loading="lazy"
              alt={t("home.about.html")}
              title={t("home.about.html")}
              src={html.src} />
          </TechItem>
          <TechItem className="hiddenX delay100" title={t("home.about.css")}>
            <Image
              width={50}
              height={50}
              loading="lazy"
              alt={t("home.about.css")}
              title={t("home.about.css")}
              src={css.src} />
          </TechItem>
          <TechItem className="hiddenX delay100" title={t("home.about.emotion")}>
            <Image
              width={50}
              height={50}
              loading="lazy"
              alt={t("home.about.emotion")}
              title={t("home.about.emotion")}
              src={emotion.src} />
          </TechItem>
          <TechItem className="hiddenX delay100" title={t("home.about.figma")}>
            <Image
              width={50}
              height={50}
              loading="lazy"
              alt={t("home.about.figma")}
              title={t("home.about.figma")}
              src={figma.src} />
          </TechItem>
          <TechItem className="hiddenX delay100" title={t("home.about.prismic")}>
            <Image
              width={50}
              height={50}
              loading="lazy"
              alt={t("home.about.prismic")}
              title={t("home.about.prismic")}
              src={prismic.src} />
          </TechItem>
          <TechItem className="hiddenX delay100" title={t("home.about.mui")}>
            <Image
              width={50}
              height={50}
              loading="lazy"
              alt={t("home.about.mui")}
              title={t("home.about.mui")}
              src={mui.src} />
          </TechItem>
          <TechItem className="hiddenX delay100" title={t("home.about.nodejs")}>
            <Image
              width={50}
              height={50}
              loading="lazy"
              alt={t("home.about.nodejs")}
              title={t("home.about.nodejs")}
              src={nodejs.src} />
          </TechItem>
          <TechItem className="hiddenX delay100" title={t("home.about.python")}>
            <Image
              width={50}
              height={50}
              loading="lazy"
              alt={t("home.about.python")}
              title={t("home.about.python")}
              src={python.src} />
          </TechItem>
        </TechContent>
      </AboutMeContainer>
    </Grid>
  );
};

export default AboutMe;