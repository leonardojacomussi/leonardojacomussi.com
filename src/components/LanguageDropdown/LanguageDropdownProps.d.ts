import { HTMLAttributes } from "react";
import { Translator } from "../../i18n";
import { Theme } from "@emotion/react";

export default interface LanguageDropdownProps extends HTMLAttributes<HTMLDivElement> {
  t: Translator,
};