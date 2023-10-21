import logo from '../../assets/icons/logo.svg'
import styled from "styled-components";
export const Logo = () => {
    return (
        <StyledImg src={logo} alt={"logo"}/>
    )
}

const StyledImg = styled.img `
  width: 50px;
  transition: .3s;

  &:hover {
    background-color: rgba(90, 151, 245, 0.51);
    border-radius: 10px;
    transition: .3s;
  }
  &:active {
    transform: scale(0.9);
    transition: .3s;
  }

  @media screen and (max-width: 576px) {
    width: 30px;
  }
`