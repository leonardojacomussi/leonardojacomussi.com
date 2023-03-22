import Head from "next/head";
import { NextPage } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";
import BackToTop from "../components/BackToTop";
import { Fragment, useEffect, useState } from "react";
import LoadingContent from "../components/LoadingContent";
import HomeProps, { HomeStaticProps } from "./Home/HomeProps";
/**Sections */
import Main from "./Home/Sections/Main";
import Services from "./Home/Sections/Services";
import AboutMe from "./Home/Sections/AboutMe";
import Qualifications from "./Home/Sections/Qualifications";
import Portfolio from "./Home/Sections/Portfolio";
import Contact from "./Home/Sections/Contact";
/**Styles */
import { Container } from "./Home/styles";
import { getTranslator, Translator, dictionaries } from "../i18n";
import { MutableRefObject, useRef } from "react";
/**Helpers */
import { setAnimations } from "./Home/helpers";

const Home: NextPage<HomeProps> = ({ dictionary, ...props }): JSX.Element => {
  const t: Translator = getTranslator(dictionary);
  const mainRef: MutableRefObject<HTMLElement> = useRef(null);
  const [openLoadingContent, setOpenLoadingContent] = useState<boolean>(true);

  useEffect(() => {
    setOpenLoadingContent(false);
    setAnimations();
  }, []);

  return (
    <Fragment>
      <Head>
        <meta name="description" content={t("metadata.description")} />
      </Head>
      <Container>
        <Header t={t} />
        <Main t={t} mainRef={mainRef} />
        <Services t={t} />
        <AboutMe t={t} />
        <Qualifications t={t} />
        <Portfolio t={t} />
        <Contact t={t} setOpenLoadingContent={setOpenLoadingContent} />
        <Footer t={t} />
        <BackToTop t={t} main={mainRef.current} />
        <LoadingContent open={openLoadingContent} />
      </Container>
    </Fragment>
  );
};

export const getStaticProps = async ({ locale, ...props }): Promise<{ props: HomeStaticProps }> => {
  const dictionary = await dictionaries[locale]();
  return { props: { dictionary: dictionary } }
};

export default Home;