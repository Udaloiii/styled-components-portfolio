import styled from "styled-components";
import {Navigation} from "src/components/header/Navigation.tsx";
import {Logo} from "src/components/logo/Logo.tsx";
import svgSprite from '../../assets/icons/svgSprite.svg'

export const Header = () => {
    return (
        <StyleHeader>
            <Logo/>
            <svg>
                <use xlinkHref={`${svgSprite}#redux`}/>
            </svg>
            <Navigation/>
        </StyleHeader>
    )
}
export const StyleHeader = styled.header`
  width: 100%;
  height: 60px;
  background-color: green;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 576px) {
    height: max-content;
    flex-direction: column;
    align-items: center;
  }
`