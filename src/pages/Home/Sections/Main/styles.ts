import styled from "@emotion/styled";
import { HTMLAttributes } from "react";

export const Grid = styled.div<HTMLAttributes<HTMLElement>>`
  grid-area: main-area;
  display: grid;
  width: 100%;
  grid-template-columns: .28fr 3fr .28fr;
  grid-template-rows: auto;
  grid-template-areas:
    ". main-container .";
  background-image: ${({ theme }) => `url(${theme.backgrounds.mainImgBg})`};
  background-size: cover;
	background-position: top;
  padding-top: 12rem;
  box-sizing: border-box;

  @media(max-width: 987px) {
    background-size: 200%;
    background-repeat: no-repeat;
  };
`;

export const MainContainer = styled.main<HTMLAttributes<HTMLElement>>`
  grid-area: main-container;
  width: 100%;
  height: 100%;
  row-gap: 4rem;
  display: grid;
  grid-template-columns: repeat(3, auto);
  grid-template-rows: repeat(5, auto);
  grid-template-areas:
    "hello-area hello-area img-area"
    "subtitle-area subtitle-area img-area"
    "description-area description-area description-area"
    "calltoaction-area calltoaction-area calltoaction-area"
    "infos-area infos-area infos-area";
  
  @media(max-width: 987px) {
    height: 100%;
    grid-template-columns: repeat(3, auto);
    grid-template-rows: repeat(6, auto);
    grid-template-areas:
      "img-area img-area img-area"
      "hello-area hello-area hello-area"
      "subtitle-area subtitle-area subtitle-area"
      "description-area description-area description-area"
      "calltoaction-area calltoaction-area calltoaction-area"
      "infos-area infos-area infos-area";
  };
`;

export const Hello = styled.h1<HTMLAttributes<HTMLHeadingElement>>`
  grid-area: hello-area;
  width: 100%;
  height: auto;
  /* margin: 2rem 0; */

  @media (max-width: 340px) {    
    &.pt {
      font-size: 4.3rem !important;
    };
  };

  @media(max-width: 750px) {
    font-size: 5.8rem;
    font-weight: 700;
    line-height: 100%;
    letter-spacing: -0.5%;
  };

  @media(max-width: 530px) {
    font-size: 4.6rem;
    font-weight: 700;
    line-height: 100%;
  };
`;

export const Subtitle = styled.div<HTMLAttributes<HTMLDivElement>>`
  grid-area: subtitle-area;
  width: auto;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;

  h3 {
    white-space: nowrap;
  };

  .typer {
    width: fit-content;
    display: inline-flex;
    color: ${({ theme }) => theme.colors.purple};
    overflow: hidden; /* Ensures the content is not revealed until the animation */
    border-right: .15em solid orange; /* The typwriter cursor */
    white-space: nowrap; /* Keeps the content on a single line */
    animation:
      typing 3.5s steps(40, end) infinite,
      blink-caret .75s step-end infinite;

    @keyframes typing {
      from { width: 0 }
      to { width: 100% }
    };

    @keyframes blink-caret {
      from, to { border-color: transparent }
      100% { border-color: orange; }
    };
  };

  @media (max-width: 415px) {    
    .pt {
      font-size: 1.8rem !important;
      white-space: pre;
      display: block;
      max-width: 26rem;
    };
  };

  @media (max-width: 460px) {    
    .en .typer {
      font-size: 2rem !important;
      max-width: 24rem;
    };
  };

  @media(max-width: 750px) {
    h3 {
      font-size: 3.3rem;
      font-weight: 600;
      line-height: 100%;
      letter-spacing: 0.25%;
    };
  };

  @media(max-width: 530px) {
    h3 {
      font-size: 2.3rem;
      font-weight: 600;
      line-height: 100%;
    };
  };
`;

export const Me = styled.div<HTMLAttributes<HTMLDivElement>>`
  grid-area: img-area;
  width: auto;
  height: auto;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: flex-end;

  > div {
    position: unset !important;
  };

  img {
    object-fit: contain;
    width: 100% !important;
    position: relative !important;
    height: unset !important;
    min-width: 25rem !important;
    max-width: 46rem;
  };

  @media(max-width: 987px) {
    width: 100%;
    height: auto;
    justify-content: center;
    align-items: center;

    > div {
      position: relative !important;
    };

    img {
      z-index: 0;
      min-width: 27.7rem !important;
      min-height: 36.5rem !important;
    }; 
  };

  @media(max-width: 500px) {
    img {
      min-width: 18.3rem !important;
      min-height: 24.1rem !important;
    };
  };
`;

export const Description = styled.p<HTMLAttributes<HTMLParagraphElement>>`
  grid-area: description-area;
  width: 100%;
  height: auto;
`;

export const CallToAction = styled.div<HTMLAttributes<HTMLDivElement>>`
  grid-area: calltoaction-area;
  width: 100%;
  height: auto;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  column-gap: 3rem;

  button {
    width: 11.5rem;
    height: 6rem;
    color: ${({ theme }) => theme.colors.black};
    background-color: ${({ theme }) => theme.colors.yellow};
  };
`;

export const Infos = styled.div<HTMLAttributes<HTMLDivElement>>`
  grid-area: infos-area;
  width: 100%;
  height: auto;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  column-gap: 4.5rem;
  color: ${({ theme }) => theme.colors.txt};

  .info-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;

    .info-title {
      font-size: 1.4rem;
      font-weight: 500;
      line-height: 100%;
      letter-spacing: 1.25%;
    };

    .info-content {

    };
  };

  @media(max-width: 530px) {
    flex-direction: column;
    row-gap: 4rem;
  };
`;