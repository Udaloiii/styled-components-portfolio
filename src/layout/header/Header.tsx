import styled from "styled-components";
import {Menu} from "src/components/menu/Menu.tsx";
import {Logo} from "src/components/logo/Logo.tsx";


export const Header = () => {
    return (
        <StyleHeader>
            <Logo/>
            <Menu/>
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