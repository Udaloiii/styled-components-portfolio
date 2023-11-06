import styled, {css} from "styled-components";
import {theme} from "src/styles/Theme.tsx";

type MenuPropsType = {
    items?: string[]
}
export const MobileMenu = ({items}: MenuPropsType) => {
    return (
        <StyledNavigation>
            <BurgerButton isOpen={true}>
                <span></span>
            </BurgerButton>
            <Popup isOpen={true}>
                <ul>
                    {items?.map((el, index) => <ListItem key={index}>
                        <Link href={`#${el}`}>
                            {el}
                            <Mask><span>{el}</span></Mask>
                            <Mask><span>{el}</span></Mask>
                        </Link>
                    </ListItem>)}
                </ul>
            </Popup>
        </StyledNavigation>
    )
}

const StyledNavigation = styled.nav`
  display: none;

  @media ${theme.media.mobile} {
    display: block;
  }

`

const BurgerButton = styled.button<{ isOpen: boolean }>`
  position: fixed;
  top: -100px;
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

    ${props => props.isOpen && css<{ isOpen: boolean }>`
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

      ${props => props.isOpen && css<{ isOpen: boolean }>`
        transform: rotate(-45deg) translateY(0);
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

      ${props => props.isOpen && css<{ isOpen: boolean }>`
        width: 36px;
        transform: rotate(45deg) translateY(0);
      `}
    }
  }
`
const Popup = styled.div<{ isOpen: boolean }>`
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(42, 42, 42, 0.9);
  z-index: 99999;

  ${props => props.isOpen && css<{ isOpen: boolean }>`
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

const Link = styled.a`
  color: transparent;
  transition: .3s;
  font-family: "Josefin Sans", sans-serif;
  font-size: 1.5rem;


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

const ListItem = styled.li`
  position: relative;

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