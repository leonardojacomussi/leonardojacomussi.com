import styled from "@emotion/styled";
import { HTMLAttributes } from "react";

export const Container = styled.div<HTMLAttributes<HTMLDivElement>>`
  max-width: 100%;
  height: auto;
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: repeat(7, auto);
  grid-template-areas:
    "main-area"
    "services-area"
    "about-area"
    "qualifications-area"
    "portfolio-area"
    "contact-area"
    "footer-area";
  row-gap: 8rem;

  .hiddenX {
    opacity: 0;
    filter: blur(.5rem);
    transform: translateX(-100%);
    transition: all 1s;
  };

  .showX {
    opacity: 1;
    filter: blur(0);
    transform: translateX(0);
  };

  .hiddenY {
    opacity: 0;
    filter: blur(.5rem);
    transform: translateY(100%);
    transition: all 1s;
  };

  .showY {
    opacity: 1;
    filter: blur(0);
    transform: translateY(0);
  };

  .delay100 {
    transition-delay: 100ms;
  };

  .delay200 {
    transition-delay: 200ms;
  };

  .delay300 {
    transition-delay: 300ms;
  };

  .delay400 {
    transition-delay: 400ms;
  };

  .delay500 {
    transition-delay: 500ms;
  };

  .delay600 {
    transition-delay: 600ms;
  };

  .delay700 {
    transition-delay: 700ms;
  };

  .delay800 {
    transition-delay: 800ms;
  };

  .delay900 {
    transition-delay: 900ms;
  };

  @media(prefers-reduced-motion) {
    .hiddenX {
      transition: none;
    };

    .showX {
      opacity: 1;
    };

    .hiddenY {
      transition: none;
    };

    .showY {
      opacity: 1;
    };
  };
`;