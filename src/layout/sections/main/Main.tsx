import {FlexWrapper} from "src/components/FlexWrapper.tsx";
import avatar from '../../../assets/image/avatar1.webp'
import {Container} from "src/components/container/Container.tsx";
import {FC} from "react";
import {S} from './Main_Styles.ts';
import Typewriter from 'typewriter-effect';


export const Main: FC = () => {

    return (
        <S.Main id="Home">
            <Container>
                <FlexWrapper align={"center"} justify={"space-around"} wrap={"wrap"}>
                    <div>
                        <S.Text>Hi there!</S.Text>
                        <S.Name>I am <span> Eugene Udalykh</span></S.Name>
                        <S.MainTitle>
                            <p>A web developer</p>
                            <Typewriter
                                options={{
                                    strings: ['I am frontend developer'],
                                    autoStart: true,
                                    loop: true,
                                    delay: 150,
                                }}
                            /></S.MainTitle>
                    </div>
                    <S.WrapperForImg><S.Img src={avatar} alt="Eugene Udalykh"/></S.WrapperForImg>
                </FlexWrapper>
            </Container>
        </S.Main>
    )
}