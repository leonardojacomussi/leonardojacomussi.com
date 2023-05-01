import { FC } from "react";
import Image from "next/image";
import Button from "../../../../components/Button";
import { differenceInYears, differenceInMonths } from "date-fns";
/**Props */
import QualificationsProps from "./QualificationsProps";
/**Helpers */
import { downloadCV } from "./helpers";
/**Styles */
import {
  Grid, QualificationsContainer, LeftSide, RightSide, Title, Subtitle,
  EducationTitle, Experience, HarmoniaLogo, HarmoniaTitle,
  CurrentAssignment, Education, Courses, CoursesTitle, Meta,
  MetaContent, MetaLogo, Rocketseat, RocketseatContent,
  RocketseatLogo, UFSM, UFSMLogo, UFSMContent, Descomplica,
  DescomplicaContent, DescomplicaLogo, Udemy, UdemyLogo,
  UdemyTitle, Firebase, ModernWeb, DownloadCV

} from "./styles";
/**Files */
import harmoniaImg from "../../../../../public/assets/icons/harmonia.webp";
import rocketseatImg from "../../../../../public/assets/icons/rocketseat.webp";
import metaImg from "../../../../../public/assets/icons/meta.webp";
import ufsmImg from "../../../../../public/assets/icons/ufsm.webp";
import descomplicaImg from "../../../../../public/assets/icons/descomplica.webp";
import udemyImg from "../../../../../public/assets/icons/udemy.webp";

const Qualifications: FC<QualificationsProps> = ({ t }): JSX.Element => {
  const startDateOfWorkAtHarmonia = new Date("2020-01-01T00:00:00.000-03:00");
  const today: Date = new Date();
  const timeOfWorkHarmoniaInYears: number = differenceInYears(today, startDateOfWorkAtHarmonia);
  const timeOfWorkHarmoniaInMonths: number = differenceInMonths(today, startDateOfWorkAtHarmonia) % 12 + 1;

  return (
    <Grid id="qualifications">
      <QualificationsContainer>
        <LeftSide>
          <Title className="st1">{t("home.qualifications.title")}</Title>
          <Subtitle className="hiddenY">{t("home.qualifications.subtitle")}</Subtitle>
          <Experience className="hiddenX">
            <HarmoniaTitle>
              <h5>{t("home.qualifications.work.harmonia.title")}</h5>
              <div>
                <span>
                  {
                    t("home.qualifications.work.harmonia.timeTotal")
                      .replace("$NUMYEAR", String(timeOfWorkHarmoniaInYears))
                      .replace("$NUMMONTHS", String(timeOfWorkHarmoniaInMonths))
                  }
                </span>
                <span>{t("home.qualifications.work.harmonia.local")}</span>
              </div>
            </HarmoniaTitle>
            <HarmoniaLogo title={t("home.qualifications.work.harmonia.title")}>
              <Image
                width={32}
                height={32}
                quality={100}
                loading="lazy"
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
              <p className="overline">
                {t("home.qualifications.work.harmonia.assignments.eng.time")}
              </p>
            </CurrentAssignment>
          </Experience>
          <EducationTitle className="hiddenY delay100">{t("home.qualifications.education.title")}</EducationTitle>
          <Education className="hiddenX delay100">
            <Descomplica>
              <DescomplicaLogo>
                <Image
                  width={32}
                  height={32}
                  quality={100}
                  loading="lazy"
                  alt={t("home.qualifications.education.descomplica.title")}
                  title={t("home.qualifications.education.descomplica.title")}
                  src={descomplicaImg.src}
                />
              </DescomplicaLogo>
              <DescomplicaContent>
                <h5>{t("home.qualifications.education.descomplica.title")}</h5>
                <span>
                  {t("home.qualifications.education.descomplica.time")}
                  <br />
                  {t("home.qualifications.education.descomplica.local")}
                </span>
                <h6>{t("home.qualifications.education.descomplica.course")}</h6>
                <p className="overline">{t("home.qualifications.education.descomplica.time")}</p>
              </DescomplicaContent>
            </Descomplica>
            <UFSM>
              <UFSMLogo>
                <Image
                  width={32}
                  height={32}
                  quality={100}
                  loading="lazy"
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
          <DownloadCV className="hiddenX download-cv-left">
            <Button onClick={downloadCV}>
              Download CV
            </Button>
          </DownloadCV>
        </LeftSide>

        <RightSide>

          <CoursesTitle className="hiddenY delay100">{t("home.qualifications.courses.title")}</CoursesTitle>
          <Courses className="hiddenX delay100">
            <Meta>
              <MetaLogo>
                <Image
                  width={32}
                  height={32}
                  quality={100}
                  loading="lazy"
                  alt={t("home.qualifications.courses.meta_frontend.title")}
                  title={t("home.qualifications.courses.meta_frontend.title")}
                  src={metaImg.src}
                />
              </MetaLogo>
              <MetaContent>
                <h5>{t("home.qualifications.courses.meta_frontend.title")}</h5>
                <span>{t("home.qualifications.courses.meta_frontend.type")}</span>
                <h6>{t("home.qualifications.courses.meta_frontend.course")}</h6>
                <p className="overline">{t("home.qualifications.courses.meta_frontend.time")}</p>
              </MetaContent>
            </Meta>
            <Rocketseat>
              <RocketseatLogo>
                <Image
                  width={32}
                  height={32}
                  quality={100}
                  loading="lazy"
                  alt={t("home.qualifications.courses.rocketseat.title")}
                  title={t("home.qualifications.courses.rocketseat.title")}
                  src={rocketseatImg.src}
                />
              </RocketseatLogo>
              <RocketseatContent>
                <h5>{t("home.qualifications.courses.rocketseat.title")}</h5>
                <span>{t("home.qualifications.courses.rocketseat.type")}</span>
                <h6>{t("home.qualifications.courses.rocketseat.course")}</h6>
                <p className="overline">{t("home.qualifications.courses.rocketseat.time")}</p>
              </RocketseatContent>
            </Rocketseat>
            <Udemy>
              <UdemyTitle>
                <h5>{t("home.qualifications.courses.udemy.title")}</h5>
                <div>
                  <span>{t("home.qualifications.courses.udemy.type")}</span>
                </div>
              </UdemyTitle>
              <UdemyLogo title={t("home.qualifications.courses.udemy.title")}>
                <Image
                  width={32}
                  height={32}
                  quality={100}
                  loading="lazy"
                  alt={t("home.qualifications.courses.udemy.title")}
                  title={t("home.qualifications.courses.udemy.title")}
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
                <h6>{t("home.qualifications.courses.udemy.courses.firebase.title")}</h6>
                <p className="overline">{t("home.qualifications.courses.udemy.courses.firebase.duration")}</p>
                <p className="overline">{t("home.qualifications.courses.udemy.courses.firebase.time")}</p>
              </Firebase>
              <ModernWeb>
                <h6>{t("home.qualifications.courses.udemy.courses.modernWeb.title")}</h6>
                <p className="overline">{t("home.qualifications.courses.udemy.courses.modernWeb.duration")}</p>
                <p className="overline">{t("home.qualifications.courses.udemy.courses.modernWeb.time")}</p>
              </ModernWeb>
            </Udemy>
          </Courses>
          <DownloadCV className="hiddenX download-cv-right">
            <Button onClick={downloadCV}>
              Download CV
            </Button>
          </DownloadCV>
        </RightSide>
      </QualificationsContainer>
    </Grid>
  );
};

export default Qualifications;