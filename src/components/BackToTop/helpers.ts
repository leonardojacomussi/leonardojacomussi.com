import { SetStateAction } from "react";

export const listenToScroll = (
	isVisible: boolean,
	setIsVisible: (value: SetStateAction<boolean>) => void,
	main: HTMLElement | null,
) => {
	// console.log(main)
	// const heightToHideFrom = getOffset(main);
	const heightToHideFrom = getOffset(document.getElementById("top"))
	const winScroll = document.body.scrollTop ||
		document.documentElement.scrollTop;
	if (winScroll > heightToHideFrom) {
		!isVisible &&      // to limit setting state only the first time         
			setIsVisible(true);
	} else {
		setIsVisible(false);
	}
};

const getOffset = (element: HTMLElement) => {
	const rect = element?.getBoundingClientRect()
	const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
	// console.log("rect: ", rect)
	// console.log("scrollTop: ", scrollTop)
	return rect!.top + scrollTop;
};