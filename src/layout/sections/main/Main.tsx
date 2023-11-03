import {FlexWrapper} from "src/components/FlexWrapper.tsx";
import avatar from '../../../assets/image/avatar1.webp'
import styled from "styled-components";
import {Container} from "src/components/container/Container.tsx";
import {theme} from "src/styles/Theme.tsx";

export const Main = () => {
    return (
        <StyleMain id="Home">
            <Container>
                <FlexWrapper align={"center"} justify={"space-between"}>
                    <FlexWrapper direction={"column"} justify={"center"} gap={"20px"}>
                        <Text>Hi there!</Text>
                        <Name>I'm <span> Eugene Udalykh</span></Name>
                        <MainTitle>Im frontend developer</MainTitle>
                    </FlexWrapper>
                    <WrapperForImg><StyledImg src={avatar} alt="Eugene Udalykh"/></WrapperForImg>
                </FlexWrapper>
            </Container>
        </StyleMain>
    )
}
const StyleMain = styled.section`
  display: flex;
  width: 100%;
  min-height: 100vh;
  //height: 100vh; // добавил чтобы длина была на всю страницу если уберу, то контейнер будет по длине картинки)
  padding-top: 60px; // чтобы при скролле учитывало длину Header
  //background-color: #02323f;
`

const WrapperForImg = styled.div`
  position: relative;
  z-index: 0;
  
  &::before {
    content: "";
    position: absolute;
    display: inline-block;
    top: -24px;
    right: -24px;
    width: 360px;
    height: 495px;
    border: 5px solid ${theme.color.accent};
    z-index: -1;
  }

`
const StyledImg = styled.img`
  border: 1px solid #e5e4e4;
  background: rgba(68, 68, 68, 0.95);
  border-radius: 10px;
  width: 350px;
  height: 450px;
  object-fit: cover;
`

const MainTitle = styled.h1`
  display: flex;
  color: #FFF;
  font-size: 27px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

`
const Name = styled.h2`
  display: flex;
  color: #FFF;
  font-family: Josefin Sans, sans-serif;
  font-size: 50px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 2.5px;

  span {
    position: relative;

    z-index: 0;  // для того, чтобы полоска была "под" текстом

    &::before {
      content: "";
      display: inline-block;
      position: absolute;
      bottom: 0;
      width: 100%;
      background-color: ${theme.color.accent};
      height: 20px;
      z-index: -1;  // для того, чтобы полоска была "под" текстом
    }
  }
`
const Text = styled.span`
  display: flex;
  color: #FFF;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`