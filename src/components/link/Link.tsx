import styled from "styled-components";
import {theme} from "src/styles/Theme.tsx";

export const Link = styled.a`
  position: relative;
  color: ${theme.color.font};
  font-size: 14px;
  font-weight: 400;
  letter-spacing: 1px;
  text-transform: uppercase;
  transition: .3s;
  z-index: 0;

  &::before {
    position: absolute;
    content: "";
    display: inline-block;
    width: 0;
    left: 50%;
    transform: translate(-50%, -50%);
    height: 7px;
    bottom: -5px;
    background-color: ${theme.color.accent};
    z-index: -1;
  }

  &:hover {
    transition: .3s;

    &::before {
      width: 100%;
      transition: .2s ease-in-out;
    }
  }

  &:active {
    color: #0041ab;
    transition: .1s;
    text-shadow: 2px 2px 2px rgb(255, 255, 255);
  }
`