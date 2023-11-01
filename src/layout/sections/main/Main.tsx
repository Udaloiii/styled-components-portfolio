import {FlexWrapper} from "src/components/FlexWrapper.tsx";
import avatar from '../../../assets/image/avatar1.webp'
import styled from "styled-components";
import {Container} from "src/components/container/Container.tsx";

export const Main = () => {
    return (
        <StyleMain id="Home">
            <Container>
                <FlexWrapper align={"center"} justify={"space-between"}>
                    <div>
                        <Text>Hi there!</Text>
                        <Name>Im Eugene Udalykh</Name>
                        <MainTitle>Im frontend developer</MainTitle>
                    </div>
                    <StyledImg src={avatar} alt="Eugene Udalykh"/>
                </FlexWrapper>
            </Container>
        </StyleMain>
    )
}
const StyleMain = styled.section`
  width: 100%;
  min-height: 100vh;
  height: 100vh; // добавил чтобы длина была на всю страницу если уберу, то контейнер будет по длине картинки)
  padding-top: 60px; // чтобы при скролле учитывало длину Header
  //background-color: #02323f;
`
const StyledImg = styled.img`
  border: 1px solid #e5e4e4;
  background: rgba(255, 255, 255, 0.3);
  border-radius: 10px;
  width: 350px;
  height: 450px;
  object-fit: cover;
`

const MainTitle = styled.h1`
  display: flex;
  color: #FFF;
  font-family: Poppins, sans-serif;
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
`
const Text = styled.span`
  display: flex;
  color: #FFF;
  font-family: Poppins, sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`