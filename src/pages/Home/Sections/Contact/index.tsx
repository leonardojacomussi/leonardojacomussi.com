import { FC, useRef, useEffect, useState } from "react";
import { useTheme, Theme } from "@emotion/react";
import { useRouter, NextRouter } from "next/router";
import Button from "../../../../components/Button";
import { VariantType, useSnackbar } from "notistack";
/**Props */
import ContactProps from "./ContactProps";
/**Styles */
import {
  Grid, ContactContainer, Title, Subtitle,
  Form, MapContainer
} from "./styles";
/**Helpers */
import { setMapMarkers, contactSender } from "./helpers";

const Contact: FC<ContactProps> = ({ t, setOpenLoadingContent }): JSX.Element => {
  const router: NextRouter = useRouter();
  const theme: Theme = useTheme();
  const divMap = useRef<HTMLDivElement | null>(null);
  const [contactName, setContactName] = useState<string>("");
  const [contactEmail, setContactEmail] = useState<string>("");
  const [contactMessage, setContactMessage] = useState<string>("");
  const { enqueueSnackbar } = useSnackbar();

  const openSnackbar = (message: string, variant: VariantType) => {
    // variant could be success, error, warning, info, or default
    enqueueSnackbar(message, { variant });
  };

  // openSnackbar("Mensagem enviada com sucesso!", "info")
  // openSnackbar("Mensagem enviada com sucesso!", "success")
  // openSnackbar("Mensagem enviada com sucesso!", "error")
  // openSnackbar("Mensagem enviada com sucesso!", "warning")
  // openSnackbar("Mensagem enviada com sucesso!", "default")

  useEffect(() => {
    if (divMap.current) {
      setMapMarkers(divMap, theme.theme);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [divMap.current, theme]);

  return (
    <Grid id="contact">
      <ContactContainer>
        <Title className="st1">{t("home.contact.title")}</Title>
        <Subtitle className="hiddenY">{t("home.contact.subtitle")}</Subtitle>
        <MapContainer className="hiddenX delay100" ref={divMap} />
        <Form
          onSubmit={(event) => {
            contactSender(
              event, t, router.locale, contactName, contactEmail, contactMessage,
              setContactName, setContactEmail, setContactMessage,
              setOpenLoadingContent, openSnackbar
            );
          }}
        >
          <label className="hiddenX delay100" htmlFor="name">{t("home.contact.form.name")}</label>
          <input className="hiddenX delay100" required type="text" name="name" id="name" value={contactName} onChange={(e) => setContactName(e.target.value)} />
          <label className="hiddenX delay100" htmlFor="email">{t("home.contact.form.email")}</label>
          <input className="hiddenX delay100" required type="email" name="email" id="email" value={contactEmail} onChange={(e) => setContactEmail(e.target.value)} />
          <label className="hiddenX delay100" htmlFor="message">{t("home.contact.form.message")}</label>
          <textarea className="hiddenX delay100" required name="message" id="message" cols={30} rows={4} value={contactMessage} onChange={(e) => setContactMessage(e.target.value)} />
          <Button className="hiddenX delay100" type="submit">
            {t("home.contact.form.bntSubmit")}
          </Button>
        </Form>
      </ContactContainer>
    </Grid>
  );
};

export default Contact;