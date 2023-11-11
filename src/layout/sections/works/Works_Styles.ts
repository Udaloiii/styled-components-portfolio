import styled from "styled-components";
import {theme} from "src/styles/Theme.tsx";
import {Button} from "src/components/button/Button.tsx";
import {Link} from "src/components/link/Link";

const Works = styled.section`
  min-height: 100vh;
  padding-top: 60px; // чтобы при скролле учитывало длину Header
`

const WorksNavigation = styled.nav`
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

  @media ${theme.media.mobile} {
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

const Work = styled.div`
  position: relative;
  border-radius: 14px;
  width: 40%;
  background-color: azure;
  padding: 0 0 20px;

  &:hover {
    transform: scale(1.05);
    transition: .2s;
  }

  & + & + & {
    margin-top: 50px;
    margin-bottom: 50px;
  }


  @media ${theme.media.mobile} {
    width: 80%;
    padding: 0 0 15px;

    & + & {
      margin-top: 50px;
    }
  }

`

const WorkTitle = styled.h3`
  display: flex;
  justify-content: center;
  color: #242424;
  font-family: Josefin Sans, sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 1px;
  padding: 10px;
`
const ImageWrapper = styled.div`
  position: relative;
  transition: 0s;

  ${Button} {
    opacity: 0;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }

  &::before {
    opacity: 0;
    content: "";
    position: absolute;
    display: inline-block;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.30);
    backdrop-filter: blur(4px);
    border-top-right-radius: 14px;
    border-top-left-radius: 14px;
    transition: 0s;
  }


  &:hover {
    &::before {
      opacity: 1;
      transition: 0s;
    }

    ${Button} {
      opacity: 1;

      &::before {
        width: 170px;
        height: 32px;
      }
    }
  }

  @media ${theme.media.tablet} {
    &::before {
      opacity: 1;
    }

    ${Button} {
      opacity: 1;
    }
  }
`
const WorkImg = styled.img`
  width: 100%;
  height: 250px;
  object-fit: cover;
  border-top-right-radius: 14px;
  border-top-left-radius: 14px;


  @media ${theme.media.tablet} {
    height: 150px;
  }
`

const LinkWrapper = styled.div`
  ${Link} {
    padding: 0 20px 0;

    &:hover {
      &::before {
        width: 60%;
      }
    }
  }
`
export const S = {
    Works,
    WorksNavigation,
    Work,
    WorkImg,
    LinkWrapper,
    ImageWrapper,
    WorkTitle
}