import { FC, useEffect, useRef, MutableRefObject, useState, Fragment } from "react";
import Button from "../Button";
import Link from "next/link";
import SideBar from "../SideBar";
import SwitchTheme from "../SwitchTheme";
import { Link as LinkScroll } from "react-scroll";
import LanguageDropdown from "../LanguageDropdown";
import { useRouter, NextRouter } from "next/router";
/**Styles */
import {
  Grid, HeaderContainer, Logo, Middle, Right
} from "./styles";
/**Props */
import HeaderProps from "./HeaderProps";
/**Helpers */
import { listenToScroll } from "./helpers";

const Header: FC<HeaderProps> = ({ t }) => {
  const router: NextRouter = useRouter();
  const [isOnTop, setIsOnTop] = useState(false);
  const headerRef: MutableRefObject<HTMLDivElement> = useRef();

  useEffect(() => {
    window.addEventListener("scroll", () => listenToScroll(isOnTop, setIsOnTop, headerRef.current));
    const headerRefCurrent: HTMLElement | null = headerRef.current;
    return () => {
      if (!headerRefCurrent) return;
      window.removeEventListener("scroll", () => listenToScroll(isOnTop, setIsOnTop, headerRefCurrent));
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Grid ref={headerRef} isOnTop={isOnTop}>
      <HeaderContainer>
        <Logo className="header-animate">
          {
            router.pathname === "/"
              ? <LinkScroll rel="top" href="#top" activeClass="activeSection" offset={-100} to="top" spy smooth hashSpy={false} isdynamicduration={0} delay={0}>
                Leonardo<br />Jacomussi
              </LinkScroll>
              : <Link rel="top" href="/">
                Leonardo<br />Jacomussi
              </Link>
          }
        </Logo>
        <Middle>
          {
            router.pathname === "/"
              ? <Fragment>
                <LinkScroll rel="services" href="#services" className="header-animate" activeClass="activeSection" offset={-100} to="services" spy smooth hashSpy={false} isdynamicduration={0} delay={0}>
                  {t("header.services")}
                </LinkScroll>
                <LinkScroll rel="about-me" href="#about-me" className="header-animate" activeClass="activeSection" offset={-100} to="about-me" spy smooth hashSpy={false} isdynamicduration={0} delay={0}>
                  {t("header.aboutMe")}
                </LinkScroll>
                <LinkScroll rel="qualifications" href="#qualifications" className="header-animate" activeClass="activeSection" offset={-100} to="qualifications" spy smooth hashSpy={false} isdynamicduration={0} delay={0}>
                  {t("header.qualifications")}
                </LinkScroll>
                <LinkScroll rel="portfolio" href="#portfolio" className="header-animate" activeClass="activeSection" offset={-100} to="portfolio" spy smooth hashSpy={false} isdynamicduration={0} delay={0}>
                  {t("header.portfolio")}
                </LinkScroll>
              </Fragment>
              : <Fragment>
                <Link rel="services" href="/#services" className="header-animate">
                  {t("header.services")}
                </Link>
                <Link rel="about-me" href="/#about-me" className="header-animate">
                  {t("header.aboutMe")}
                </Link>
                <Link rel="qualifications" href="/#qualifications" className="header-animate">
                  {t("header.qualifications")}
                </Link>
                <Link rel="portfolio" href="/#portfolio" className="header-animate">
                  {t("header.portfolio")}
                </Link>
              </Fragment>
          }
          <LanguageDropdown className="header-animate" t={t} />
          <SwitchTheme t={t} className="header-animate" />
        </Middle>
        <Right>
          <SideBar className="header-animate" t={t} />
          {
            router.pathname === "/"
              ? <LinkScroll rel="contact" href="#contact" className="header-animate" activeClass="activeSection" offset={-100} to="contact" spy smooth hashSpy={false} isdynamicduration={0} delay={0}>
                <Button style={{ width: "11.5rem", height: "6rem" }}>
                  {t("header.contact")}
                </Button>
              </LinkScroll>
              : <Link rel="contact" href="/#contact" className="header-animate">
                <Button style={{ width: "11.5rem", height: "6rem" }}>
                  {t("header.contact")}
                </Button>
              </Link>
          }
        </Right>
      </HeaderContainer>
    </Grid>
  );
};

export default Header;