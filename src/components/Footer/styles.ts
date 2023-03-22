import { HTMLAttributes } from "react";
import styled from "@emotion/styled";

export const Grid = styled.div<HTMLAttributes<HTMLElement>>`
  grid-area: footer-area;
  width: 100%;
  height: auto;
  display: grid;
  grid-template-columns: .28fr 3fr .28fr;
  grid-template-rows: auto;
  grid-template-areas:
    ". footer-container .";
  box-sizing: border-box;
  margin-bottom: -8rem;
`;

export const FooterContainer = styled.footer<HTMLAttributes<HTMLElement>>`
  grid-area: footer-container;
  width: 100%;
  height: auto;
  min-height: 9rem;
  color: ${({ theme }) => theme.colors.txt};
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: repeat(3, auto);
  grid-template-areas:
    "copy-area"
    "email-area"
    "coffee-area";
  gap: 1rem;
  padding: 1.5rem 0;
  justify-content: center;
  align-items: center;
  text-align: center;

  .a {
    font-weight: 300;
  };

  p {
    grid-area: copy-area;
  };

  .a:nth-of-type(1){
    grid-area: email-area;
  };

  .a:nth-of-type(2){
    grid-area: coffee-area;
  };

  @media(min-width: 750px) {
    grid-template-columns: repeat(2, auto);
    grid-template-rows: repeat(2, auto);
    grid-template-areas:
      "copy-area copy-area"
      "email-area coffee-area";
    justify-content: space-between;
  };

  @media(min-width: 900px) {
    grid-template-columns: calc(50% - 1rem) calc(25% - .5rem) calc(25% - .5rem);
    grid-template-rows: auto;
    grid-template-areas:"copy-area email-area coffee-area";

    p {
      text-align: left;
    };
    
    .a:nth-of-type(1){
      text-align: left;
    };
    
    .a:nth-of-type(2){
      text-align: right;
    };
  };
`;