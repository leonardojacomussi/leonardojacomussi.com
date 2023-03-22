import { FC, Fragment, useState } from "react";
import List from "@mui/material/List";
import Button from "../Button";
import SwitchTheme from "../SwitchTheme";
import Drawer from "@mui/material/Drawer";
import SideBarProps from "./SideBarProps";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import MenuIcon from "@mui/icons-material/Menu";
import { useTheme, Theme } from "@emotion/react";
import { Link as LinkScroll } from "react-scroll";
import IconButton from "@mui/material/IconButton";
import LanguageDropdown from "../LanguageDropdown";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
/**Styles */
import { useStyles, TopBar } from "./styles";

const SideBar: FC<SideBarProps> = ({ t, ...props }): JSX.Element => {
  const theme: Theme = useTheme();
  const [open, setOpen] = useState<boolean>(false);
  const { classes } = useStyles({ emotionTheme: theme });

  const handleDrawerOpen = (): void => {
    setOpen(true);
  };

  const handleDrawerClose = (): void => {
    setOpen(false);
  };

  const handleDrawerCloseOutside = (event: MouseEvent | KeyboardEvent | Event | {}, reason: string) => {
    if (reason === "clickaway") {
      return;
    };
    setOpen(false);
  };

  return (
    <Fragment>
      <TopBar {...props}>
        <IconButton color="inherit" aria-label="Abrir menu" edge="end" onClick={handleDrawerOpen} sx={{ ...(open && { display: "none" }), padding: "0px" }}>
          <MenuIcon classes={{ root: classes.menuIcon }} />
        </IconButton>
      </TopBar>
      <Drawer variant="temporary" anchor="right" open={open} onClose={handleDrawerCloseOutside} classes={{ root: classes.drawer }}>
        <IconButton onClick={handleDrawerClose} classes={{ root: classes.iconArrowBack }}>
          <ChevronRightIcon />
        </IconButton>
        <List classes={{ root: classes.list }}>
          <Divider />
          <ListItem key="services" classes={{ root: classes.listItem }}>
            <LinkScroll href="#services" onClick={handleDrawerClose} activeClass="activeSection" offset={-90} to="services" spy smooth hashSpy={false} isdynamicduration={0} delay={0}>
              {t("header.services")}
            </LinkScroll>
          </ListItem>

          <ListItem key="about-me" classes={{ root: classes.listItem }}>
            <LinkScroll href="#about-me" onClick={handleDrawerClose} activeClass="activeSection" offset={-90} to="about-me" spy smooth hashSpy={false} isdynamicduration={0} delay={0}>
              {t("header.aboutMe")}
            </LinkScroll>
          </ListItem>

          <ListItem key="qualifications" classes={{ root: classes.listItem }}>
            <LinkScroll href="#qualifications" onClick={handleDrawerClose} activeClass="activeSection" offset={-90} to="qualifications" spy smooth hashSpy={false} isdynamicduration={0} delay={0}>
              {t("header.qualifications")}
            </LinkScroll>
          </ListItem>

          <ListItem key="portfolio" classes={{ root: classes.listItem }}>
            <LinkScroll href="#portfolio" onClick={handleDrawerClose} activeClass="activeSection" offset={-90} to="portfolio" spy smooth hashSpy={false} isdynamicduration={0} delay={0}>
              {t("header.portfolio")}
            </LinkScroll>
          </ListItem>

          <ListItem key="contact" classes={{ root: classes.listItem }}>
            <LinkScroll href="#contact"  onClick={handleDrawerClose} activeClass="activeSection" offset={-100} to="contact" spy smooth hashSpy={false} isdynamicduration={0} delay={0}>
              <Button style={{ width: "11.5rem", height: "6rem" }}>
                {t("header.contact")}
              </Button>
            </LinkScroll>
          </ListItem>

          <Divider classes={{ root: classes.divider }} />
          <ListItem key="theme-language" classes={{ root: classes.listItem }}>
            <SwitchTheme t={t} onClick={handleDrawerClose} />
            <LanguageDropdown t={t} onClick={handleDrawerClose} />
          </ListItem>
        </List>
      </Drawer>
    </Fragment>
  );
}

export default SideBar;