import { FC, useState, useEffect } from "react";
import { useTheme, Theme } from "@emotion/react";
import { Link as LinkScroll } from "react-scroll";
import KeyboardDoubleArrowUpIcon from "@mui/icons-material/KeyboardDoubleArrowUp";
/**Styles */
import { Container } from "./styles";
/**Helpers */
import { listenToScroll } from "./helpers";
/**Props */
import BackToTopProps from "./BackToTopProps";

const BackToTop: FC<BackToTopProps> = ({ t, main }): JSX.Element => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const theme: Theme = useTheme();

  useEffect(() => {
    window.addEventListener("scroll", () => listenToScroll(isVisible, setIsVisible, main));
    const mainCurrent: HTMLElement | null = main;
    return () => {
      if (!mainCurrent) return;
      window.removeEventListener("scroll", () => listenToScroll(isVisible, setIsVisible, mainCurrent));
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <LinkScroll activeClass="activeSection" to="top" spy smooth offset={-100} hashSpy={false} isdynamicduration={0}>
      <Container isVisible={isVisible} title={t("backToTop")}>
        <KeyboardDoubleArrowUpIcon sx={{ fill: theme.colors.white }} />
      </Container>
    </LinkScroll>
  );
};

export default BackToTop;