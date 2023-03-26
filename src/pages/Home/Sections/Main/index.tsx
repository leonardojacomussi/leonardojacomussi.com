import { FC } from "react";
import Image from "next/image";
import { differenceInYears } from "date-fns";
import Link from "../../../../components/Link";
import { useRouter, NextRouter } from "next/router";
import Button from "../../../../components/Button";
/**Styles */
import {
  Grid, MainContainer, Hello, Subtitle, Me,
  Description, CallToAction, Infos
} from "./styles";
/**Props */
import MainProps from "./MainProps";
import meImg from "../../../../../public/assets/others/Me-min.webp";

const Main: FC<MainProps> = ({ t, ...props }): JSX.Element => {
  const dateOfBirth: Date = new Date("1996-09-27T00:00:00.000-03:00");
  const startDateOfExperience = new Date("2020-01-01T00:00:00.000-03:00");
  const today: Date = new Date();
  const myAge: number = differenceInYears(today, dateOfBirth);
  const myTimeOfExperience: number = differenceInYears(today, startDateOfExperience);

  const router: NextRouter = useRouter();
  return (
    <Grid>
      <MainContainer id="top" {...props}>
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
          <Image src={meImg.src} alt="Leonardo Jacomussi" quality={75} width={460} height={670} sizes="100%" priority/>
        </Me>
        <Description className="p1">
          {t("home.main.description")}
        </Description>
        <CallToAction>
          <Link scroll rel="contact" href="#contact" to="contact">
            <Button style={{ width: "11.5rem", height: "6rem" }}>
              {t("header.contact")}
            </Button>
          </Link>
          <Link scroll rel="portfolio" href="#portfolio" to="portfolio">
            <>{t("header.portfolio")} {">"} </>
          </Link>
        </CallToAction>
        <Infos>
          <div className="info-container hiddenX delay300">
            <span className="info-title">{t("home.main.iLiveIn")}</span>
            <h5 className="info-content">{t("home.main.saoPaulo")}</h5>
          </div>
          <div className="info-container hiddenX delay200">
            <span className="info-title">{t("home.main.experience")}</span>
            <h5 className="info-content">{t("home.main.timeExperience").replace("$NUM", String(myTimeOfExperience))}</h5>
          </div>
          <div className="info-container hiddenX delay100">
            <span className="info-title">{t("home.main.age")}</span>
            <h5 className="info-content">{t("home.main.myAge").replace("$NUM", String(myAge))}</h5>
          </div>
        </Infos>
      </MainContainer>
    </Grid>
  );
};

export default Main