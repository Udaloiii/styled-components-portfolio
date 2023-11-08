import {FlexWrapper} from "src/components/FlexWrapper.tsx";
import avatar from '../../../assets/image/avatar1.webp'
import styled from "styled-components";
import {Container} from "src/components/container/Container.tsx";
import {theme} from "src/styles/Theme.tsx";
import {font} from "src/styles/Common.ts";

export const Main = () => {
    return (
        <StyleMain id="Home">
            <Container>
                <FlexWrapper align={"center"} justify={"space-around"} wrap={"wrap"}>
                    <div>
                        <Text>Hi there!</Text>
                        <Name>I am <span> Eugene Udalykh</span></Name>
                        <MainTitle>I am frontend developer</MainTitle>
                    </div>
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
  padding-top: 60px; // чтобы при скролле учитывало длину Header
`

const WrapperForImg = styled.div`
  position: relative;
  z-index: 0;

  &::before {
    content: "";
    position: absolute;
    display: inline-block;
    top: -24px;
    right: -34px;
    width: 360px;
    height: 470px;
    border: 5px solid ${theme.color.accent};
    z-index: -1;

    @media ${theme.media.mobile} {
      width: 314px;
      height: 414px;
      top: -20px;
      right: -21px;
    }
  }

`
const StyledImg = styled.img`
  background: rgba(215, 215, 215, 0.95);
  box-shadow: 0 0 8px 5px rgba(232, 232, 232, 0.8);
  border-radius: 10px;
  width: 350px;
  height: 430px;
  object-fit: cover;

  @media ${theme.media.mobile} {
    width: 310px;
    height: 380px;
  }
`

const MainTitle = styled.h1`
  ${font({Fmin: 20, Fmax: 27, weight: 400})}
  display: flex;
`
const Name = styled.h2`
  ${font({family: "'Josefin Sans', sans-serif", Fmax: 50, Fmin: 36, weight: 700})};
  margin: 20px 0;
  letter-spacing: 0.05rem;
  display: flex;
  flex-wrap: wrap;

  span {
    position: relative;
    z-index: 0; // для того, чтобы полоска была "под" текстом
    white-space: nowrap;

    &::before {
      content: "";
      display: inline-block;
      position: absolute;
      bottom: 0;
      width: 100%;
      background-color: ${theme.color.accent};
      height: 20px;
      z-index: -1; // для того, чтобы полоска была "под" текстом
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