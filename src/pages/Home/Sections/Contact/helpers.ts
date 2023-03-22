import { MutableRefObject, SetStateAction, FormEvent } from "react";
import { ThemeOpts } from "../../../../interfaces";
import { Loader } from "@googlemaps/js-api-loader";
import { Translator } from "../../../../i18n";
import stylesMap from "../../../../utils/stylesMap.json";
import { VariantType } from "notistack";
import pinDarkMap from "../../../../../public/assets/icons/pinDark.svg";
import pinLightMap from "../../../../../public/assets/icons/pinLight.svg";

const loaderMaps: Loader = new Loader({
  apiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
  version: "weekly",
  libraries: ["places"]
});

export const setMapMarkers = async (
  element: MutableRefObject<HTMLDivElement>,
  theme: ThemeOpts
): Promise<void> => {
  try {
    await loaderMaps.load();
    const map = new google.maps.Map(element.current, {
      mapTypeControl: false,
      streetViewControl: false,
      zoomControl: true,
      fullscreenControl: true,
      mapTypeId: "roadmap",
      tilt: 0,
      styles: theme === "dark" ? stylesMap["night"] : null,
      zoom: 7,
      center: { lat: -23.5014897, lng: -46.7210947 }
    });

    new google.maps.Marker({
      position: { lat: -23.5014897, lng: -46.7210947 },
      title: "Leonardo Jacomussi",
      map: map,
      icon: {
        url: theme === "dark" ? pinLightMap.src : pinDarkMap.src,
        size: new google.maps.Size(55, 55),
        scaledSize: new google.maps.Size(40, 40),
      },
      optimized: true,
      zIndex: 0,
      cursor: "default",
    });
  } catch (error) {
    console.log("Error: ", error);
  };
};

export const contactSender = async (
	event: FormEvent,
	t: Translator,
	locale: string,
	contactName: string,
	contactEmail: string,
	contactMessage: string,
	setContactName: (value: SetStateAction<string>) => void,
	setContactEmail: (value: SetStateAction<string>) => void,
	setContactMessage: (value: SetStateAction<string>) => void,
	setOpenLoadingContent: (value: SetStateAction<boolean>) => void,
	openSnackbar: (message: string, variant: VariantType) => void,
): Promise<void> => {
	if (event) event.preventDefault();
	setOpenLoadingContent(true);
	if (contactName !== "" && contactEmail !== "" && contactEmail.includes("@") && contactMessage !== "") {
		const body: {
			contactClientName: string,
			contactClientEmail: string,
			contactClientMessage: string,
			contactClientRegion: string,
			locale: string,
			today: Date,
		} = {
			contactClientName: contactName,
			contactClientEmail: contactEmail,
			contactClientMessage: contactMessage,
			today: new Date(),
			locale: locale,
			contactClientRegion: Intl.DateTimeFormat().resolvedOptions().timeZone,
		}
		try {
			const response: Response = await fetch("/api/sendContactEmail", {
				method: "POST",
				body: JSON.stringify(body)
			});
			if (response.ok || response.status === 200 || response.status === 202) {
				openSnackbar(t("emails.contact.feedback.success"), "success");
				setContactName("");
				setContactEmail("");
				setContactMessage("");
			} else if (response.status === 500) {
				openSnackbar(t("emails.contact.feedback.unexpectedError"), "error");
			};

		} catch (error) {
			console.error(error);
			openSnackbar(t("emails.contact.feedback.unexpectedError").replace("code", error.code), "error");
		};
	} else if (contactName === "") {
		openSnackbar(t("emails.contact.feedback.validName"), "error");
	} else if (contactEmail === "" || !contactEmail.includes("@")) {
		openSnackbar(t("emails.contact.feedback.validEmail"), "error");
	} else if (contactMessage === "") {
		openSnackbar(t("emails.contact.feedback.validMessage"), "error");
	} else {
		openSnackbar(t("emails.contact.feedback.checkInfos"), "error");
	}
	setOpenLoadingContent(false);
	// return alert("Sua mensagem foi enviada com sucesso!");
};