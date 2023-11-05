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

  // & a {
    //   color: ${theme.color.font};
  //   font-size: 14px;
  //   font-weight: 400;
  //   letter-spacing: 1px;
  //   text-transform: uppercase;
  //   transition: .3s;
  //
  //   &:hover {
  //     color: #0654e0;
  //     transition: .3s;
  //   }
  //
  //   &:active {
  //     color: #0041ab;
  //     transition: .1s;
  //     text-shadow: 2px 2px 2px rgb(255, 255, 255);
  //   }
  // }

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

// const Link =styled.a`
//   position: relative;
//   color: ${theme.color.font};
//   font-size: 14px;
//   font-weight: 400;
//   letter-spacing: 1px;
//   text-transform: uppercase;
//   transition: .3s;
//   z-index: 0;
//
//   &::before {
//     position: absolute;
//     content: "";
//     display: inline-block;
//     width: 0;
//     left: 50%;
//     transform: translate(-50%, -50%);
//     height: 7px;
//     bottom: -5px;
//     background-color: ${theme.color.accent};
//     z-index: -1;
//   }
//
//   &:hover {
//     transition: .3s;
//
//     &::before {
//       width: 100%;
//       transition: .2s ease-in-out;
//     }
//   }
//
//   &:active {
//     color: #0041ab;
//     transition: .1s;
//     text-shadow: 2px 2px 2px rgb(255, 255, 255);
//   }
// `