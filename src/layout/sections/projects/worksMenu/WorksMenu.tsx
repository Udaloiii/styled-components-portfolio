import styled from "styled-components";
import {theme} from "src/styles/Theme.tsx";
import {Link} from "src/components/link/Link";

type MenuPropsType = {
    items?: string[]
}
export const WorksMenu = ({items}: MenuPropsType) => {
    return (
        <StyledNavigation>
            <ul>
                {items?.map((el, index) => <li key={index}><Link href={`#${el}`}>{el}</Link></li>)}
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

  @media ${theme.media.tablet} {
    & ul {
      padding: 0 20px 15px;
    }

    & a {
      font-size: 1.3rem;
    }
  }

  @media  ${theme.media.mobile} {
    & ul {
      margin: 0;
      white-space: nowrap;
    }

    & a {
      font-size: 1rem;
    }
  }

  @media screen and (max-width: 320px) {
    & ul {
      gap: 8px;
    }

    & a {
      font-size: 0.9rem;
    }
  }
`