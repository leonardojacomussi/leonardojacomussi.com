import { FC } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter, NextRouter } from "next/router";
import Button from "../../../../components/Button";
/**Props */
import PortfolioProps from "./PortfolioProps";
/**Styles */
import {
  Grid, PortfolioContainer, Title, Subtitle,
  OtohMockup, OtohMockup2, DescriptionContainer,
  AwardContainer, AwardItem
} from "./styles";
/**Files */
import otohMockup from "../../../../../public/assets/others/otohMockup.png";

const Portfolio: FC<PortfolioProps> = ({ t }): JSX.Element => {
  const router: NextRouter = useRouter();
  return (
    <Grid id="portfolio">
      <PortfolioContainer>
        <Title className="st1">{t("home.portfolio.title")}</Title>
        <Subtitle className="hiddenY">{t("home.portfolio.subtitle")}</Subtitle>
        <DescriptionContainer>
          <h4 className="hiddenX delay100">
            {t("home.portfolio.otoh.title")}
          </h4>
          <p className="p1 hiddenX delay100">
            {t("home.portfolio.otoh.description1")}
          </p>
          <p className="p1 hiddenX delay100">
            {t("home.portfolio.otoh.description2")}
          </p>
          <OtohMockup2 className="hiddenX delay100" id="otoh-mockup">
            <Image
              layout="fill"
              alt={t("home.portfolio.otoh.title")}
              title={t("home.portfolio.otoh.title")}
              src={otohMockup.src} />
          </OtohMockup2>
          <AwardContainer>
            <h6 className="hiddenX delay100">{t("home.portfolio.otoh.award.title")}</h6>
            <Link className="hiddenX delay100" href="https://premio.connectedsmartcities.com.br/o-que-e-o-premio-csc/#conteudo|1" target="_blank">
              <AwardItem>
                🥇
                <p className="p1">{t("home.portfolio.otoh.award.award1")}</p>
              </AwardItem>
            </Link>
            <Link className="hiddenX delay100" href="https://www.cbic.org.br/premioinovacaoesustentabilidade/edicao-anterior-2022/" target="_blank">
              <AwardItem>
                🥈
                <p className="p1">{t("home.portfolio.otoh.award.award2")}</p>
              </AwardItem>
            </Link>
          </AwardContainer>
          <Link className="hiddenX delay100" href={`https://www.otoh.com.br/${router.locale}`} target="_blank">
            <Button>
              {t("home.portfolio.otoh.learnMore")}
            </Button>
          </Link>
        </DescriptionContainer>
        <OtohMockup className="hiddenX delay100">
          <Image
            layout="fill"
            alt={t("home.portfolio.otoh.title")}
            title={t("home.portfolio.otoh.title")}
            src={otohMockup.src} />
        </OtohMockup>
      </PortfolioContainer>
    </Grid>
  );
};

export default Portfolio;