import styled from "styled-components";

type ProjectPropsType = {
    title: string
    text: string
    link?: string
    logo?: string
}
export const Project = ({title, text, logo, link}: ProjectPropsType) => {
    return (
        <StyledLink href={link} target={"_blank"}>
            <StyledProject>
                <StyledTitle>
                    {title}
                </StyledTitle>
                <StyledImg src={logo} alt="logo"/>

            </StyledProject>
        </StyledLink>

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

const StyledLink = styled.a`
  width: 100%;
  height: 100%;
  color: #242424;
`

const StyledTitle = styled.h3`
  display: flex;
  justify-content: center;
`

const StyledImg = styled.img`
  width: 90%;
  height: 90%;
  object-fit: cover;
`