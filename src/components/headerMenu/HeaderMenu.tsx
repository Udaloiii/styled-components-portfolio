import styled from "styled-components";
import {theme} from "src/styles/Theme.tsx";

type MenuPropsType = {
    items?: string[]
}
export const HeaderMenu = ({items}: MenuPropsType) => {
    return (
        <StyledNavigation>
            <ul>
                {items?.map((el, index) => <ListItem key={index}>
                    <Link href={`#${el}`}>
                        {el}
                        <Mask><span>{el}</span></Mask>
                        <Mask><span>{el}</span></Mask>
                    </Link>
                </ListItem>)}
            </ul>
        </StyledNavigation>
    )
}

const StyledNavigation = styled.nav`

  & ul {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 30px;
  }


  @media screen and (max-width: 768px) {
    & ul {
      padding: 0 20px;
    }

    & a {
      font-size: 1.3rem;
    }
  }

  @media screen and (max-width: 576px) {
    & ul {
      margin: 0;
    }

    & a {
      font-size: 1rem;
    }
  }

  @media screen and (max-width: 320px) {
    & ul {
      padding: 0 9px;
      gap: 9px;
    }

    & a {
      font-size: 0.9rem;
    }
  }

`


const Link = styled.a`
  color: transparent;
  transition: .3s;
  font-family: "Josefin Sans", sans-serif;
  font-size: 1.5rem;

  &:hover {
    //transition: .3s;
    //text-shadow: 2px 2px 2px rgb(255, 255, 255);
  }

  &:active {
    color: #0041ab;
    transition: .1s;
    //text-shadow: 2px 2px 2px rgb(255, 255, 255);
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