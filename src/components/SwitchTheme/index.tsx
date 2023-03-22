import { FC, HTMLAttributes } from "react";
import Switch from "@mui/material/Switch";
import useCustomThemeContext from "../../hooks/useCustomThemeContext";
import { CustomThemeContextProps } from "../../interfaces";
/**Styles */
import { Container } from "./styles";
/**Props */
import SwitchThemeProps from "./SwitchThemeProps";

const SwitchTheme: FC<SwitchThemeProps> = ({ t, ...props }) => {
  const { currentTheme, changeCurrentTheme }: CustomThemeContextProps = useCustomThemeContext();
  return (
    <Container {...props} title={t("header.changeTheme")}>
      {currentTheme && <Switch
        sx={{ m: 1 }}
        value={currentTheme}
        title={t("header.changeTheme")}
        onClick={(e) => {
          if (e) e.preventDefault();
          const target = e.target as HTMLInputElement;
          if (target.value === "dark") changeCurrentTheme("light");
          if (target.value === "light") changeCurrentTheme("dark");
          return
        }}
        checked={currentTheme === "dark"}
      />}
    </Container>
  );
};

export default SwitchTheme;
