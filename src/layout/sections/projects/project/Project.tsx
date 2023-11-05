import styled from "styled-components";
import {Button} from "src/components/button/Button.tsx";
import {Link} from "src/components/link/Link.tsx";

type ProjectPropsType = {
    title: string
    text?: string
    linkDemo?: string
    linkCode?: string
    logo?: string
}
export const Project = ({title, logo, linkDemo, linkCode}: ProjectPropsType) => {
    return (
        <StyledProject>
            <ImageWrapper>
                <StyledImg src={logo} alt="logo"/>
                <Button>view project</Button>
            </ImageWrapper>
            <StyledTitle>
                {title}
            </StyledTitle>
            <LinkWrapper>
                <Link href={linkDemo} target={"_blank"} color={"black"}>
                Demo
            </Link>
                <Link href={linkCode} target={"_blank"} color={"black"}>
                    Code
                </Link>
            </LinkWrapper>
        </StyledProject>


    )
}

const StyledProject = styled.div`
  position: relative;
  border-radius: 14px;
  width: 40%;
  background-color: azure;
  //transition: .3s;
  padding: 0 0 20px;

  &:hover {
    transform: scale(1.05);
    transition: .2s;
  }

  & + & + & {
    margin-top: 50px;
    margin-bottom: 50px;
  }


  @media screen and (max-width: 768px) {
    width: 80%;
    padding: 0 0 15px;

    & + & {
      margin-top: 50px;
    }
  }

`

const StyledTitle = styled.h3`
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

  &::before {
    content: "";
    position: absolute;
    display: inline-block;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.30);
    backdrop-filter: blur(4px);
    opacity: 0;
    border-top-right-radius: 14px;
    border-top-left-radius: 14px;
    transition: 0s;
  }

  ${Button} {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    opacity: 0;
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
`
const StyledImg = styled.img`
  width: 100%;
  height: 250px;
  object-fit: cover;
  border-top-right-radius: 14px;
  border-top-left-radius: 14px;


  @media screen and (max-width: 768px) {
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
// const StyledLink = styled.a`
//   position: relative;
//   font-size: 14px;
//   font-weight: 400;
//   line-height: normal;
//   letter-spacing: 1px;
//   text-transform: uppercase;
//   color: black;
//   padding: 20px;
//   cursor: pointer;
//
//   &::after {
//     content: "";
//     position: absolute;
//     left: 12px;
//     top: 35px;
//     width: 70%;
//     height: 4px;
//     background-color: ${theme.color.accent};
//     //visibility: hidden;
//     transform: scaleX(0);
//     transition: transform 0.2s ease-in-out;
//   }
//
//   &:hover::after {
//     visibility: visible;
//     transform: scaleX(1);
//   }
// `