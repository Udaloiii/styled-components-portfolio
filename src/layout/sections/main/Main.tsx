import {FlexWrapper} from "src/components/FlexWrapper.tsx";
import avatar from '../../../assets/image/avatar1.webp'
import styled from "styled-components";

export const Main = () => {
    return (
        <StyleMain>
            <FlexWrapper align={"center"} justify={"space-around"}>
                <div>
                    <Text>Hi there!</Text>
                    <Name>Im Eugene Udalykh</Name>
                    <MainTitle>Im frontend developer</MainTitle>
                </div>
                <StyledImg src={avatar} alt="Eugene Udalykh"/>
                {/*<Skills/>*/}
            </FlexWrapper>
        </StyleMain>
    )
}
const StyleMain = styled.div`
  padding: 20px 0;
  width: 100%;
  min-height: 100vh;
  background-color: #02323f;
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

`
const Name = styled.h2`
  display: flex;
`
const Text = styled.span`
    display: flex;
`