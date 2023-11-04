import styled from "styled-components";
import {FlexWrapper} from "src/components/FlexWrapper.tsx";

type ProjectPropsType = {
    title: string
    text?: string
    linkDemo?: string
    linkCode?: string
    logo?: string
}
export const Project = ({title, text, logo, linkDemo, linkCode}: ProjectPropsType) => {
    return (
        <StyledProject>
            <StyledImg src={logo} alt="logo"/>
            <StyledTitle>
                {title}
            </StyledTitle>
            <FlexWrapper align={"flex-start"}>
                <StyledLink href={linkDemo} target={"_blank"}>
                    Demo
                </StyledLink>
                <StyledLink href={linkCode} target={"_blank"}>
                    Code
                </StyledLink>
            </FlexWrapper>

        </StyledProject>


    )
}

const StyledProject = styled.div`
  border-radius: 14px;
  width: 400px;
  height: 350px;
  background-color: azure;
  transition: .3s;

  &:hover {
    transform: scale(1.05);
    transition: .3s;
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

const StyledImg = styled.img`
  width: 400px;
  height: 250px;
  object-fit: cover;
  border-top-right-radius: 14px;
  border-top-left-radius: 14px;
`
const StyledLink = styled.a`
  position: relative;
  font-family: Poppins, sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: black;
  padding: 20px;

  //&:hover {
  //  text-decoration: underline;
  //  text-decoration-color: cornflowerblue;
  //  text-decoration-thickness: 5px;
  //}

  &::after {
    content: "";
    position: absolute;
    left: 12px;
    top: 40px;
    width: 70%;
    height: 4px;
    background-color: cornflowerblue;
    visibility: hidden;
    transform: scaleX(0);
    transition: transform 0.3s ease-in-out;
  }

  &:hover::after {
    visibility: visible;
    transform: scaleX(1);
  }
`