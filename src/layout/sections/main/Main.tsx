import {FlexWrapper} from "src/components/FlexWrapper.tsx";
import avatar from '../../../assets/image/avatar.png'
import styled from "styled-components";

export const Main = () => {
    return (
        <StyleMain>
            <FlexWrapper justify={"space-around"} align={"center"}>
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
const StyleMain = styled.main`
  padding: 20px 0;
  width: 100%;
  min-height: 100vh;
  background-color: #02323f;
`
const StyledImg = styled.img`
  border: 1px solid #e5e4e4;
  border-radius: 10px;
  width: 350px;
  height: 450px;
  object-fit: cover;
`

const MainTitle = styled.h1`

`
const Name = styled.h2`
`
const Text = styled.span`
`