import {theme} from "src/styles/Theme.tsx";
import styled, {css} from "styled-components";
import {Link} from "react-scroll";

const NavLink = styled(Link)`
  color: transparent;
  transition: .3s;
  font-family: "Josefin Sans", sans-serif;
  font-size: 1.5rem;
  cursor: pointer;


  &:active {
    color: #0041ab;
    transition: .1s;
  }
`

const Mask = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  display: inline-block;
  height: 50%;
  overflow-y: hidden;
  color: ${theme.color.accent};
  transition: .2s;

  & + & {
    top: 50%;

    span {
      display: inline-block;
      transform: translateY(-50%);
      transition: .2s;
    }
  }
`

const MenuItem = styled.li`
  position: relative;
  user-select: none;

  &::before {
    content: "";
    display: inline-block;
    height: 2px;
    background-color: ${theme.color.accent};

    position: absolute;
    top: 50%;
    left: -10px;
    right: -10px;
    z-index: 1;
    transform: scale(0);
    transition: .2s;
  }

  &:hover {
    &::before {
      transform: scale(1);
      transition: .2s;
    }

    ${Mask} {
      transform: skewX(12deg) translateX(3px);
      color: ${theme.color.font};
      transition: .2s;

      & + ${Mask} {
        transform: skewX(12deg) translateX(-3px);
        transition: .2s;
      }
    }
  }
`

// mobile menu
const MobileNavigation = styled.nav`
`

const BurgerButton = styled.button<{ open: boolean }>`
  position: fixed;
  top: -120px;
  right: -100px;
  width: 200px;
  height: 200px;
  z-index: 9999999;

  span {
    display: block;
    width: 36px;
    height: 2px;
    background-color: ${theme.color.font};
    position: absolute;
    left: 40px;
    bottom: 50px;
    transition: .2s;

    ${props => props.open && css<{ open: boolean }>`
      background-color: rgba(255, 255, 255, 0);
    `}
    &::before {
      content: "";
      position: absolute;
      display: block;
      width: 36px;
      height: 2px;
      background-color: ${theme.color.font};
      transform: translateY(-10px);
      transition: .2s;

      ${props => props.open && css<{ open: boolean }>`
        transform: rotate(-45deg) translateY(0);
        transition: .2s;
      `}
    }

    &::after {
      content: "";
      position: absolute;
      display: block;
      right: 0;
      width: 24px;
      height: 2px;
      background-color: ${theme.color.font};
      transform: translateY(10px);
      transition: .2s;

      ${props => props.open && css<{ open: boolean }>`
        width: 36px;
        transform: rotate(45deg) translateY(0);
        transition: .2s;
      `}
    }
  }
`
const Popup = styled.div<{ open: boolean }>`
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(42, 42, 42, 0.90);
  z-index: 99999;

  ${props => props.open && css<{ open: boolean }>`
    display: flex;
    justify-content: center;
    align-items: center;
  `}
  ul {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 30px;
    color: ${theme.color.accent};
    letter-spacing: 4px;
  }
`

// desktop menu
const DesktopNavigation = styled.nav`
  & ul {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 30px;
  }


  @media ${theme.media.tablet} {
    & ul {
      padding: 0 20px;
    }

    & a {
      font-size: 1.3rem;
    }
  }
`

export const S = {
    NavLink,
    MenuItem,
    Mask,
    BurgerButton,
    Popup,
    MobileNavigation,
    DesktopNavigation
}