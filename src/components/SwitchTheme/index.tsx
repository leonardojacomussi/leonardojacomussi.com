import { FC, HTMLAttributes } from "react";
import Switch from "@mui/material/Switch";
import useCustomThemeContext from "../../hooks/useCustomThemeContext";
import { CustomThemeContextProps } from "../../interfaces";
/**Styles */
import { Container } from "./styles";


const SwitchTheme: FC<HTMLAttributes<HTMLDivElement>> = (props) => {
  const { currentTheme, changeCurrentTheme }: CustomThemeContextProps = useCustomThemeContext();
  return (
    <Container {...props}>
      {currentTheme && <Switch
        sx={{ m: 1 }}
        value={currentTheme}
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
