import {FlexWrapper} from "src/components/FlexWrapper.tsx";
import avatar from '../../../assets/image/avatar1.webp'
import {Container} from "src/components/container/Container.tsx";
import {FC} from "react";
import {S} from './Main_Styles.ts'

export const Main: FC = () => {
    return (
        <S.Main id="Home">
            <Container>
                <FlexWrapper align={"center"} justify={"space-around"} wrap={"wrap"}>
                    <div>
                        <S.Text>Hi there!</S.Text>
                        <S.Name>I am <span> Eugene Udalykh</span></S.Name>
                        <S.MainTitle>I am frontend developer</S.MainTitle>
                    </div>
                    <S.WrapperForImg><S.Img src={avatar} alt="Eugene Udalykh"/></S.WrapperForImg>
                </FlexWrapper>
            </Container>
        </S.Main>
    )
}