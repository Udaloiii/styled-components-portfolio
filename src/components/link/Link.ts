import styled, {css} from "styled-components";
import {theme} from "src/styles/Theme.tsx";

type LinkPropsType = {
    color?: string
    active?: boolean
}
export const Link = styled.a<LinkPropsType>`
  position: relative;
  color: ${props => props.color || theme.color.font};
  font-size: 14px;
  font-weight: 400;
  letter-spacing: 1px;
  text-transform: uppercase;
  transition: .3s;
  z-index: 0;
  cursor: pointer;


  &:active {
    transition: .1s;
    text-shadow: 1px 1px 2px rgb(255, 255, 255);
  }

  &::before {
    position: absolute;
    content: "";
    display: inline-block;
    width: 0;
    left: 50%;
    transform: translate(-50%, -50%);
    bottom: -5px;
    background-color: ${theme.color.accent};
    z-index: -1;
    transition: .1s ease-in-out;

    ${props => props.active && css<{ active?: boolean }>`
      height: 7px;
      width: 100%;
      transition: .2s ease-in-out;
    `}
  }

  &:hover {
    transition: .3s;

    &::before {
      width: 100%;
      transition: .2s ease-in-out;
      height: 7px;
    }
  }
}
`