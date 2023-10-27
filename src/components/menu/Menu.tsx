import styled from "styled-components";

type MenuPropsType = {
    items?: string[]
}
export const Menu = ({items}: MenuPropsType) => {
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
    padding: 0 30px;
    list-style-type: none;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 30px;
  }

  & a {
    color: white;
    transition: .3s;
    font-family: "Bradley Hand ITC", sans-serif;
    font-size: 1.5rem;

    &:hover {
      color: #0041ab;
      transition: .3s;
      text-shadow: 2px 2px 2px rgb(255, 255, 255);
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