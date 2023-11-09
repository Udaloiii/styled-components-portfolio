import styled from "styled-components";
import {HeaderMenu} from "src/components/headerMenu/HeaderMenu.tsx";
import {Logo} from "src/components/logo/Logo.tsx";
import {Container} from "src/components/container/Container.tsx";
import {FlexWrapper} from "src/components/FlexWrapper.tsx";
import {MobileMenu} from "src/layout/header/mobileMenu/MobileMenu.tsx";
import {theme} from "src/styles/Theme.tsx";

const menuHeaderItems = ["Home", "Skills", "Works", "Contact"]
export const Header = () => {
    return (
        <StyleHeader>
            <Container>
                <FlexWrapper justify={"space-between"} align={"center"}>
                    <Logo/>
                    <HeaderMenu items={menuHeaderItems}/>
                    <MobileMenu items={menuHeaderItems}/>
                </FlexWrapper>
            </Container>
        </StyleHeader>
    )
}
export const StyleHeader = styled.header`
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  z-index: 99999;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: ${theme.color.accent};
`