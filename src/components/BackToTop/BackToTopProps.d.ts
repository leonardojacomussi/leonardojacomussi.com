import { HTMLAttributes } from "react";
import { Translator } from "../../i18n";

export default interface BackToTopProps {
  t: Translator,
  main: HTMLElement,
};

export interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  isVisible: boolean;
};