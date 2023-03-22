import styled from "@emotion/styled";
import { HTMLAttributes } from "react";

export const Grid = styled.div<HTMLAttributes<HTMLElement>>`
  grid-area: about-area;
  width: 100%;
  height: auto;
  display: grid;
  grid-template-columns: .28fr 3fr .28fr;
  grid-template-rows: auto;
  grid-template-areas:
    ". about-me-container .";
  box-sizing: border-box;
`;

export const AboutMeContainer = styled.div<HTMLAttributes<HTMLDivElement>>`
  grid-area: about-me-container;
  width: 100%;
  height: 100%;
  row-gap: 5rem;
  column-gap: 3rem;
  box-sizing: border-box;
  display: grid;
  grid-template-columns: repeat(2, calc(50% - 1.5rem));
  grid-template-rows: repeat(3, auto);
  grid-template-areas:
    "title-area ."
    "subtitle-area tech-title-area"
    "description-area tech-content-area";
  
  @media(max-width: 900px) {
    grid-template-columns: 100%;
    grid-template-rows: repeat(5, auto);
    grid-template-areas:
      "title-area"
      "subtitle-area"
      "description-area"
      "tech-title-area"
      "tech-content-area";
  };
`;

export const Title = styled.h1<HTMLAttributes<HTMLHeadingElement>>`
  grid-area: title-area;
  width: 100%;
  height: auto;
  color: ${({ theme }) => theme.colors.purple};
`;

export const Subtitle = styled.h2<HTMLAttributes<HTMLHeadingElement>>`
  grid-area: subtitle-area;
  width: 100%;
  height: fit-content;

  @media(max-width: 750px) {
    font-size: 5.8rem;
    font-weight: 700;
    line-height: 100%;
    letter-spacing: -0.5%;
  };

  @media(max-width: 530px) {
    font-size: 4.6rem,;
    font-weight: 700;
    line-height: 100%;
  };
`;

export const TechTitle = styled.h4<HTMLAttributes<HTMLHeadingElement>>`
  grid-area: tech-title-area;
  width: 100%;
  height: auto;

  @media(max-width: 900px) {
    margin-top: 3rem;
  };
`;

export const TechContent = styled.div<HTMLAttributes<HTMLDivElement>>`
  grid-area: tech-content-area;
  width: 100%;
	height: auto;
	display: grid;
	grid-template-columns: repeat(4, auto);
	grid-template-rows: repeat(auto-fill, auto);
	justify-content: space-between;
	gap: 2rem;
	align-items: center;
	margin: auto;
`;

export const TechItem = styled.div<HTMLAttributes<HTMLDivElement>>`
  width: 8.6rem;
  height: 8.6rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  border-radius: ${({ theme }) => theme.borders.borderRadius};
  background-color: ${({ theme }) => theme.colors.techBg};
  filter: ${({ theme }) => theme.effects.filter};

  img {
    width: 5rem !important;
    height: auto !important;
  };

  @media(max-width: 460px) {
    width: 15vw;
    height: 15vw;
    /* height: 12vh; */
    img {
      width: auto !important;
      height: auto !important;
      max-width: 4rem;
    };
  };
`;

export const DescriptionContainer = styled.div<HTMLAttributes<HTMLDivElement>>`
  grid-area: description-area;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: auto;
  row-gap: 4rem;
`;

export const NetworkContainer = styled.div<HTMLAttributes<HTMLDivElement>>`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  flex-wrap: wrap;
  row-gap: 2rem;
`;

export const NetworkItem = styled.div<HTMLAttributes<HTMLDivElement>>`
  width: auto;
  height: auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;

  img {
    width: 3.2rem !important;
    height: auto !important;
  };

  span {
    font-family: "Syne", sans-serif;
    font-size: 1.9rem;
    font-weight: 600;
    line-height: 100%;
    color: ${({ theme }) => theme.colors.txt};
  };
`;