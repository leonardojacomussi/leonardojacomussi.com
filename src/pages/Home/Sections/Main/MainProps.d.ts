import { MutableRefObject } from "react";
import { Translator } from "../../../../i18n";

export default interface MainProps {
  t: Translator,
  mainRef: any,
  [key: string]: any,
};