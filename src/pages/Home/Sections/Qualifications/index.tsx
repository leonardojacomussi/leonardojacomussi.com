import { FC } from "react";
import Image from "next/image";
import Button from "../../../../components/Button";
/**Props */
import QualificationsProps from "./QualificationsProps";
/**Styles */
import {
  Grid, QualificationsContainer, Title, Subtitle,
  EducationTitle, Experience, HarmoniaLogo, HarmoniaTitle,
  CurrentAssignment, Intern, Education, Rocketseat, RocketseatContent,
  RocketseatLogo, UFSM, UFSMLogo, UFSMContent, Udemy, UdemyLogo,
  UdemyTitle, Firebase, ModernWeb, DownloadCV, DownloadCV2

} from "./styles";
/**Files */
import harmoniaImg from "../../../../../public/assets/icons/harmonia.png";
import rocketseatImg from "../../../../../public/assets/icons/rocketseat.png";
import ufsmImg from "../../../../../public/assets/icons/ufsm.png";
import udemyImg from "../../../../../public/assets/icons/udemy.png";

const Qualifications: FC<QualificationsProps> = ({ t }): JSX.Element => {
  return (
    <Grid id="qualifications">
      <QualificationsContainer>
        <Title className="st1">{t("home.qualifications.title")}</Title>
        <Subtitle className="hiddenY">{t("home.qualifications.subtitle")}</Subtitle>
        <Experience className="hiddenX">
          <HarmoniaTitle>
            <h5>{t("home.qualifications.work.harmonia.title")}</h5>
            <div>
              <span>{t("home.qualifications.work.harmonia.timeTotal")}</span>
              <span>{t("home.qualifications.work.harmonia.local")}</span>
            </div>
          </HarmoniaTitle>
          <HarmoniaLogo title={t("home.qualifications.work.harmonia.title")}>
            <Image
              width={32}
              height={32}
              alt={t("home.qualifications.work.harmonia.title")}
              title={t("home.qualifications.work.harmonia.title")}
              src={harmoniaImg.src}
            />
          </HarmoniaLogo>
          <div className="top-dot">
            <div className="dot">
              <div className="top-vertical-line"></div>
            </div>
          </div>
          <div className="vertical-line"></div>
          <div className="bottom-dot"></div>
          <CurrentAssignment>
            <h6>{t("home.qualifications.work.harmonia.assignments.eng.title")}</h6>
            <p className="overline">{t("home.qualifications.work.harmonia.assignments.eng.period")}</p>
            <p className="overline">{t("home.qualifications.work.harmonia.assignments.eng.team")}</p>
            <p className="overline">{t("home.qualifications.work.harmonia.assignments.eng.time")}</p>
          </CurrentAssignment>
          <Intern>
            <h6>{t("home.qualifications.work.harmonia.assignments.intern.title")}</h6>
            <p className="overline">{t("home.qualifications.work.harmonia.assignments.intern.period")}</p>
            <p className="overline">{t("home.qualifications.work.harmonia.assignments.intern.team")}</p>
            <p className="overline">{t("home.qualifications.work.harmonia.assignments.intern.time")}</p>
          </Intern>

          <DownloadCV2 id="download-cv">
            <div>
              <Button>Download CV</Button>
            </div>
          </DownloadCV2>
        </Experience>
        <DownloadCV>
          <Button>Download CV</Button>
        </DownloadCV>
        <EducationTitle className="hiddenY delay100">{t("home.qualifications.education.title")}</EducationTitle>
        <Education className="hiddenX delay100">
          <Rocketseat>
            <RocketseatLogo>
              <Image
                width={32}
                height={32}
                alt={t("home.qualifications.education.rocketseat.title")}
                title={t("home.qualifications.education.rocketseat.title")}
                src={rocketseatImg.src}
              />
            </RocketseatLogo>
            <RocketseatContent>
              <h5>{t("home.qualifications.education.rocketseat.title")}</h5>
              <span>{t("home.qualifications.education.rocketseat.type")}</span>
              <h6>{t("home.qualifications.education.rocketseat.course")}</h6>
              <p className="overline">{t("home.qualifications.education.rocketseat.time")}</p>
            </RocketseatContent>
          </Rocketseat>
          <Udemy>
            <UdemyTitle>
              <h5>{t("home.qualifications.education.udemy.title")}</h5>
              <div>
                <span>{t("home.qualifications.education.udemy.type")}</span>
              </div>
            </UdemyTitle>
            <UdemyLogo title={t("home.qualifications.education.udemy.title")}>
              <Image
                width={32}
                height={32}
                alt={t("home.qualifications.education.udemy.title")}
                title={t("home.qualifications.education.udemy.title")}
                src={udemyImg.src}
              />
            </UdemyLogo>
            <div className="top-dot">
              <div className="dot">
                <div className="top-vertical-line"></div>
              </div>
            </div>
            <div className="vertical-line"></div>
            <div className="bottom-dot"></div>
            <Firebase>
              <h6>{t("home.qualifications.education.udemy.courses.firebase.title")}</h6>
              <p className="overline">{t("home.qualifications.education.udemy.courses.firebase.duration")}</p>
              <p className="overline">{t("home.qualifications.education.udemy.courses.firebase.time")}</p>
            </Firebase>
            <ModernWeb>
              <h6>{t("home.qualifications.education.udemy.courses.modernWeb.title")}</h6>
              <p className="overline">{t("home.qualifications.education.udemy.courses.modernWeb.duration")}</p>
              <p className="overline">{t("home.qualifications.education.udemy.courses.modernWeb.time")}</p>
            </ModernWeb>
          </Udemy>
          <UFSM>
            <UFSMLogo>
              <Image
                width={32}
                height={32}
                alt={t("home.qualifications.education.ufsm.title")}
                title={t("home.qualifications.education.ufsm.title")}
                src={ufsmImg.src}
              />
            </UFSMLogo>
            <UFSMContent>
              <h5>{t("home.qualifications.education.ufsm.title")}</h5>
              <span>
                {t("home.qualifications.education.ufsm.time")}
                <br />
                {t("home.qualifications.education.ufsm.local")}
              </span>
              <h6>{t("home.qualifications.education.ufsm.course")}</h6>
              <p className="overline">{t("home.qualifications.education.ufsm.time")}</p>
            </UFSMContent>
          </UFSM>
        </Education>
      </QualificationsContainer>
    </Grid>
  );
};

export default Qualifications;