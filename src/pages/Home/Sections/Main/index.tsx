import { FC } from "react";
import Image from "next/image";
import { useRouter, NextRouter } from "next/router";
import { Link as LinkScroll } from "react-scroll";
import Button from "../../../../components/Button";
/**Styles */
import {
  Grid, MainContainer, Hello, Subtitle, Me,
  Description, CallToAction, Infos
} from "./styles";
/**Props */
import MainProps from "./MainProps";
import meImg from "../../../../../public/assets/others/Me.png";

const Main: FC<MainProps> = ({ t, mainRef, ...props }): JSX.Element => {
  const router: NextRouter = useRouter();
  return (
    <Grid>
      <MainContainer ref={mainRef} id="top" {...props}>
        <Hello className={router.locale}>
          {t("home.main.hello").slice(0, t("home.main.hello").indexOf("Leonardo"))}
          <br />
          {t("home.main.hello").slice(t("home.main.hello").indexOf("Leonardo"), t("home.main.hello").length)}
        </Hello>
        <Subtitle>
          <h3>{t("home.main.subtitle1")}</h3>
          <h3 className={router.locale}>
            {t("home.main.subtitle2")} <span className="typer">{t("home.main.subtitle3")}</span>
          </h3>
        </Subtitle>
        <Me>
          <Image src={meImg.src} alt="Leonardo Jacomussi" layout="fill" /*width={417} height={378}*/ />
        </Me>
        <Description className="p1">
          {t("home.main.description")}
        </Description>
        <CallToAction>
          <LinkScroll activeClass="activeSection" to="contact" offset={-100} spy smooth hashSpy={false} isdynamicduration={0}>
            <Button style={{ width: "11.5rem", height: "6rem" }}>
              {t("header.contact")}
            </Button>
          </LinkScroll>
          <LinkScroll activeClass="activeSection" to="portfolio" offset={-100} spy smooth hashSpy={false} isdynamicduration={0}>
            <>{t("header.portfolio")} {">"} </>
          </LinkScroll>
        </CallToAction>
        <Infos>
          <div className="info-container hiddenX delay300">
            <span className="info-title">{t("home.main.iLiveIn")}</span>
            <h5 className="info-content">{t("home.main.saoPaulo")}</h5>
          </div>
          <div className="info-container hiddenX delay200">
            <span className="info-title">{t("home.main.experience")}</span>
            <h5 className="info-content">{t("home.main.3years")}</h5>
          </div>
          <div className="info-container hiddenX delay100">
            <span className="info-title">{t("home.main.age")}</span>
            <h5 className="info-content">{t("home.main.myAge")}</h5>
          </div>
        </Infos>
      </MainContainer>
    </Grid>
  );
};

export default Main