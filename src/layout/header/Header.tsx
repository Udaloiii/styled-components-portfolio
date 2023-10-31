import styled from "styled-components";
import {Menu} from "src/components/menu/Menu.tsx";
import {Logo} from "src/components/logo/Logo.tsx";
import {Container} from "src/components/container/Container.tsx";
import {FlexWrapper} from "src/components/FlexWrapper.tsx";

const menuHeaderItems = ["Home", "Skills", "Works", "Testimony", "Contact"]
export const Header = () => {
    return (
        <StyleHeader >
            <Container>
                <FlexWrapper justify={"space-between"} align={"center"}><Logo/>
                    <Menu items={menuHeaderItems}/>
                </FlexWrapper>
            </Container>
        </StyleHeader>
    )
}
export const StyleHeader = styled.header`
  position: fixed;
  left: 0;
  top: 0;
  z-index: 99999;
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