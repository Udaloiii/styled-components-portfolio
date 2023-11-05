import styled from "styled-components";
import {theme} from "src/styles/Theme.tsx";

export const Button =styled.button`
  position: relative;
  font-size: 14px;
  font-weight: 400;
  letter-spacing: 1px;
  text-transform: uppercase;
  transition: .2s;
  z-index: 0;


  &::before {
    position: absolute;
    content: "";
    display: inline-block;
    width: 70%;
    height: 10px;
    background-color: ${theme.color.accent};
    bottom: -5px;
    left: 50%;
    transform: translateX(-50%);
    z-index: -1;
    transition: .2s ease-out;
  }

  &:hover {
    &::before {
      width: 170px;
      height: 32px;
      transition: .2s ease-out;
    }
  }

  &:active {
    transform: scale(0.9);
    transition: .2s;

    &::before {
      box-shadow: 0 0 5px 2px ${theme.color.font};
    }
  }
`