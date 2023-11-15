import {FlexWrapper} from "src/components/FlexWrapper.tsx";
import avatar from '../../../assets/image/avatar1.webp'
import {Container} from "src/components/container/Container.tsx";
import {FC} from "react";
import {S} from './Main_Styles.ts';
import Typewriter from 'typewriter-effect';
import Tilt from 'react-parallax-tilt';


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
                    <Tilt
                        tiltMaxAngleX={40}
                        tiltMaxAngleY={40}
                        perspective={800}
                        transitionSpeed={1500}
                        // scale={1.1} // убрал чтобы не сдвигалось в бок
                        gyroscope={true}>
                        <S.WrapperForImg>
                            <S.Img src={avatar}
                                   alt="Eugene Udalykh"/>
                        </S.WrapperForImg>
                    </Tilt>
                </FlexWrapper>
            </Container>
        </S.Main>
    )
}