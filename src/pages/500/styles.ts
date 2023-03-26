import styled from "@emotion/styled";
import { HTMLAttributes } from "react";
import { ContainerProps } from "./ServerErrorProps";

export const Container = styled.div<ContainerProps>`
  width: 100%;
  height: ${props => props.height ? `${props.height}px` : "100vh"};
  min-height: 48rem;
  max-height: 100vh;
  display: grid;
  grid-template-columns: .28fr 3fr .28fr;
  grid-template-rows: calc(100% - 9rem) auto;
  grid-template-areas:
    ". content-area ."
    "footer-area footer-area footer-area";
  color: ${({ theme }) => theme.colors.txt};
  background-color: ${({ theme }) => theme.colors.bg};

  @media (max-width: 750px) {
    grid-template-rows: calc(100% - 13.6rem) auto;
  };
`;

export const Content = styled.div<HTMLAttributes<HTMLDivElement>>`
  grid-area: content-area;
  width: 100%;
  height: 100%;
  padding-top: 8rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8rem;

  h1 {
    font-size: 2rem;
    text-align: center;
  };

  button {
    padding: 0 1rem;
    height: 6rem;
    color: ${({ theme }) => theme.colors.black};
    background-color: ${({ theme }) => theme.colors.yellow};
  };
`;
