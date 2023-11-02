import styled from "styled-components";
import {theme} from "src/styles/Theme.tsx";

type MenuPropsType = {
    items?: string[]
}
export const WorksMenu = ({items}: MenuPropsType) => {
    return (
        <StyledNavigation>
            <ul>
                {items?.map((el, index) => <li key={index}><a href={`#${el}`}>{el}</a></li>)}
            </ul>
        </StyledNavigation>
    )
}

const StyledNavigation = styled.nav`
  height: 100%;
  display: flex;
  align-items: center;

  & ul {
    padding: 20px 0;
    list-style-type: none;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 40px;
  }

  & a {
    color: ${theme.color.font};
    font-family: Poppins, sans-serif;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 1px;
    text-transform: uppercase;
    transition: .3s;

    &:hover {
      color: #0654e0;
      transition: .3s;
    }

    &:active {
      color: #0041ab;
      transition: .1s;
      text-shadow: 2px 2px 2px rgb(255, 255, 255);
    }
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